import { useState, useEffect } from "react";
import AnimalForm from "../components/AnimalForm";
import Animal from "../components/Animal";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Animals() {
  const [showAnimals, setShowAnimals] = useState(false);
  const [animalData, setAnimalsData] = useState([]);
  const [modified, setModified] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const data = [];
        const querySnapshot = await getDocs(collection(db, "animals"));
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setAnimalsData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [modified, showAnimals]);

  function toggleShowForm() {
    setShowAnimals(true);
  }
  const animalsElements = animalData.map((animal) => {
    return <Animal {...animal} key={animal.id} setModified={setModified} />;
  });
  return (
    <div className="animals-page">
      <div className="animals-list-container">
        <div className="container">{animalsElements}</div>

        {showAnimals && <AnimalForm setShowAnimals={setShowAnimals} />}

        {!showAnimals && (
          <div className="add-animal-btn-container">
            <button onClick={toggleShowForm} className="add-animal-btn">
              Update Animal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Animals;
