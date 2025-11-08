import { useState } from "react";

export default function ChangeUpdate() {
  const [students, setStudents] = useState(["james", "john", "julia", "mercy"]);
  const handleAddStudents = () => {
    const newStudent = document.getElementById("studeID").value;
    setStudents([...students, newStudent]);
    document.getElementById("studeID").value = "";
  };
  const handleRemoveStudents = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };
  return (
    <>
      <h2>students</h2>
      <p>
        {students.map((student, index) => (
          <li onClick={() => handleRemoveStudents(index)} key={index}>
            {student}
          </li>
        ))}
      </p>
      <input id="studeID" placeholder="Add student" />
      <button onClick={handleAddStudents}>ADD</button>
      <br />
    </>
  );
}
