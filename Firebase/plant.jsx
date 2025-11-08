export default function Plant(props) {
  return (
    <div className="plant">
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <p>Quantity: {props.quantity}</p>
    </div>
  );
}
