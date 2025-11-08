import { useState } from "react";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import EditAnimal from "./EditAnimal";
export default function Animal(props) {
  const [showEditForm, setShowEditForm] = useState(false);
  async function edit() {
    setShowEditForm(true);
  }
  async function deleteAnimal() {
    try {
      await deleteDoc(doc(db, "animals", props.id));
      alert("animal was deleted");
      props.setModified((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="animal">
      <p className="animal-name">{props.name}</p>
      <p className="animal-location">{props.location}</p>
      <p className="animal-count">{props.count}</p>
      <div className="btns">
        {!showEditForm && (
          <button onClick={edit} className="edit-btn">
            Edit
          </button>
        )}
        <button onClick={deleteAnimal} className="delete-btn">
          Delete
        </button>
      </div>
      {showEditForm && (
        <EditAnimal {...props} setShowEditForm={setShowEditForm} />
      )}
    </div>
  );
}
