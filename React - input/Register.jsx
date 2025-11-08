import { useState } from "react";
import Registered from "./Registered";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      alert("Registered successfully.");
      setIsRegistered(true);
    } else {
      alert("Password dont match.");
    }
  }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="fullname">Full Name</label> */}
        <input
          required
          type="text"
          placeholder="Full Name"
          id="fullname"
          name="fullName"
          onChange={handleChange}
        />
        <br />

        <input
          required
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
          required
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
        />

        <br />
        <input
          required
          type="password"
          placeholder="Retype Password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>

      {isRegistered && (
        <Registered fullName={formData.fullName} email={formData.email} />
      )}
    </div>
  );
}
