import { useEffect, useState } from "react";
import User from "../components/User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  const usersElement = users.map((user) => (
    <User name={user.name} email={user.email} username={user.username} />
  ));

  return (
    <div>
      <h1>USERS</h1>
      <div>{usersElement}</div>
    </div>
  );
}
