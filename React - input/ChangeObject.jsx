import { useState } from "react";

export default function ChangeObject() {
  const [car, setCar] = useState({
    year: "2024",
    make: "toyota",
    model: "hilux",
  });
  const handleYear = (e) => {
    setCar((prevCar) => ({ ...prevCar, year: e.target.value }));
  };
  const handleModel = (e) => {
    setCar((prevModel) => ({ ...prevModel, model: e.target.value }));
  };
  return (
    <>
      <p>
        i love {car.make} {car.model} {car.year}
      </p>
      <input value={car.year} onChange={handleYear} type="number" />
      <input value={car.model} onChange={handleModel} />
      <br />
    </>
  );
}
