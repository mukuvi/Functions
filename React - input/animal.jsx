import { useState } from "react";
export default function AnimalForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    count: 0,
  });
  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    //validate
    if (formData.count < 0) {
      alert("invalid count .");
      return;
    }
    //sent data to database
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        required
        type="text"
        placeholder="location"
        name="location"
        onChange={handleChange}
        value={formData.location}
      />
      <input
        required
        type="number"
        placeholder="count"
        name="count"
        onChange={handleChange}
        value={formData.count}
      />
      <button>Save Animal</button>
    </form>
  );
}
