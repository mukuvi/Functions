import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
export default function AnimalForm(props) {
  const [formData, setFormData] = useState({
    name: props.name,
    location: props.location,
    count: props.count,
  });

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    //validate
    if (formData.count < 0) {
      alert("invalid count .");
      return;
    }
    //sent data to database
    try {
      await setDoc(doc(db, "animals", props.id), formData);
      alert("animal was updated successfully");
      setFormData({
        name: "",
        location: "",
        count: 0,
      });
      props.setModified((prev) => !prev);
      props.setShowEditForm(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="animals-form">
      <div className="form-group">
        <input
          required
          type="text"
          placeholder="Animal Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="form-group">
        <input
          required
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleChange}
          value={formData.location}
        />
      </div>
      <div className="form-group">
        <input
          required
          type="number"
          placeholder="Count"
          name="count"
          onChange={handleChange}
          value={formData.count}
        />
      </div>
      <div className="form-group">
        <button type="submit">Save Animal</button>
      </div>
    </form>
  );
}
