import { db } from "../firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import "./App.css";
import { useEffect } from "react";

function App() {
  let plants = [];

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "plants"));

      querySnapshot.forEach((doc) => {
        plants.push(doc.data());
      });
    }
    getData();
  }, []);
  console.log(plants);
  async function writeData() {
    const animaRef = doc(db, "animal", "004");
    await setDoc(animaRef, {
      usersname: "cheater",
      location: "maasai mara",
      count: 9,
    });
  }
  async function updateData() {
    const animaRef = doc(db, "animal", "004");
    await setDoc(animaRef, {
      name: "cheater",
      location: "amboseli",
      count: 10,
    });
  }
  async function deleteData() {
    await deleteDoc(doc(db, "animal", "005"));
  }
  return (
    <>
      <div>FIREBASE</div>
      <button onClick={writeData}>ADD ANIMAL</button>
      <button onClick={updateData}>UPDATE ANIMAL</button>{" "}
      <button onClick={deleteData}>DELETE ANIMAL</button>
    </>
  );
}

export default App;
