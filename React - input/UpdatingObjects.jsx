import { useState } from "react";

export default function UpdatingObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarModel("");
    setCarMake("");
  }
  function handleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }
  function handleChangeYear(e) {
    setCarYear(e.target.value);
  }
  function handleChangeMake(e) {
    setCarMake(e.target.value);
  }
  function handleChangeModel(e) {
    setCarModel(e.target.value);
  }
  return (
    <>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make}
            {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleChangeYear} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleChangeMake}
        placeholder="enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleChangeModel}
        placeholder="enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <br />
    </>
  );
}
