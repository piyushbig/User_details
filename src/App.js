import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card.js";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      first_name={contact.first_name}
      last_name={contact.last_name}
      avatar={contact.avatar}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      <ul>{data && data.map(createCard)}</ul>
    </div>
  );
}
