import "./App.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    count: 0,
  });
  let plants = [];
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "animal"));
      querySnapshot.forEach((doc) => {
        plants.push(doc.data());
      });
    }

    getData();
  }, []);
  async function writeData() {
    const animalsRef = doc(db, "animal", "003");
    await setDoc(animalsRef, {
      name: "Lion",
      location: "Tsavo West",
      count: 19,
    });
  }
  async function updateData() {
    const animalsRef = doc(db, "animal", "003");

    await setDoc(animalsRef, { classification: "Carnivore" }, { merge: true });
  }

  async function deleteData() {
    await deleteDoc(doc(db, "animal", "003"));
  }

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit2(event) {
    event.preventDefault();

    await addDoc(collection(db, "animal"), formData);
  }

  return (
    <>
      <h1>Firebase</h1>

      <form onSubmit={handleSubmit2}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          placeholder="location"
          name="location"
          onChange={handleChange}
          value={formData.location}
        />
        <input
          type="text"
          placeholder="count"
          name="count"
          onChange={handleChange}
          value={formData.count}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
