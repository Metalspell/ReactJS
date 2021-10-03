import React, { useState, useEffect } from 'react';

export default function PlaceholderPost() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then(response => response.json())
      .then(data => {
        setdata(data)
      });
  }, [])

  return (
    <section>
      <h1>Task 1</h1>
      {data.map(item => (
        <>
          <h2>{item.id}. {item.title}</h2>
          <p>{item.body}</p>
        </>
      ))}
    </section>
  )
}