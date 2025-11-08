import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("response not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <p key={user.id}>
            <strong>Name: </strong>
            {user.name}
            <br /> <strong>Email: </strong>
            {user.email}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default App;
