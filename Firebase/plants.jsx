import { useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection, addDoc, count } from "firebase/firestore";
import { useState } from "react";
import Plant from "./components/plant";
import Animal from "./components/animal";
function plants() {
  const [plants, setPlants] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [plantFormData, setPlantFormData] = useState({
    name: "",
    location: "",
    quantity: 0,
  });
  const [animalFormData, setAnimalFormData] = useState({
    name: "",
    location: "",
    count: 0,
  });

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "plants"));
      const plantsData = [];
      querySnapshot.forEach((doc) => {
        plantsData.push(doc.data());
      });
      setPlants(plantsData);
    }
    getData();
  }, []);
  const plantsDataset = plants.map((plant) => {
    return (
      <Plant
        key={plant.id}
        name={plant.name}
        location={plant.location}
        quantity={plant.quantity}
      />
    );
  });
  function handleChange(event) {
    setPlantFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const newData = await addDoc(collection(db, "plants"), plantFormData);
    setPlants((prevPlant) => {
      return [...prevPlant, plantFormData];
    });
  }

  return (
    <div className="all-data">
      <div className="plants-data">{plantsDataset}</div>
      <div className="animals-data">
        <Animal />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={plantFormData.name}
        />
        <input
          type="text"
          placeholder="location"
          name="location"
          onChange={handleChange}
          value={plantFormData.location}
        />
        <input
          type="text"
          name="quantity"
          onChange={handleChange}
          value={plantFormData.quantity}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default plants;
