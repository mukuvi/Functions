const styles = {
  padding: "8px 10px",
  border: "none",
  backgroundColor: "lightgreen",
};
function Button() {
  const handleClick = (e) => {
    if (e.target.textContent === "Start !") {
      e.target.textContent = "Stop !";
      e.target.style.backgroundColor = "red";
    } else {
      e.target.textContent = "Start !";
      e.target.style.backgroundColor = "lightgreen";
    }
  };
  return (
    <button style={styles} onClick={(e) => handleClick(e)}>
      Start !
    </button>
  );
}
export default Button;
