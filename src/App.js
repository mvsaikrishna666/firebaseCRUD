import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
function App() {
  const [users, setUsers] = useState();
  const usersCollectionRef = collection(db, "users");

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const CreateUser = async () => {
    const user = {
      name,
      age: Number(age),
    };
    await addDoc(usersCollectionRef, user);
  };

  const increaseAge = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newData = {
      age: Number(age) + 1,
    };
    await updateDoc(userDoc, newData);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  return (
    <div className="App">
      <input
        placeholder="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="age"
        type="number"
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={CreateUser}>Create user</button>
      {users?.map((user) => (
        <div key={user.id}>
          <p>
            {user.name},{user.age}
          </p>
          <button onClick={() => increaseAge(user.id, user.age)}>
            Increase Age
          </button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
