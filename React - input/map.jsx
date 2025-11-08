function List() {
  const fruits = ["mango", "banana", "apple", "orange", "pineapple"];
  const students = [
    { name: "james", age: 21 },
    { name: "john", age: 25 },
    { name: "julia", age: 22 },
    { name: "mercy", age: 19 },
  ];
  const fruitsEl = fruits.map((fruit) => <li>{fruit}</li>);
  const studentsEl = students.map((student) => (
    <li>
      {student.name} &nbsp;{student.age}
    </li>
  ));
  return (
    <>
      <ol> {fruitsEl.length > 0 && fruitsEl}</ol>
      <ol>{studentsEl}</ol>
    </>
  );
}
export default List;
