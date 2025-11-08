import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [myData, setMyData] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setMyData("Data loaded");
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <p>{users ? JSON.stringify(users) : "Loading..."}</p>

      <p>{myData}</p>
    </div>
  );
}

export default App;
