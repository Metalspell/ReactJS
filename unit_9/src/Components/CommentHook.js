import React, { useState } from 'react';

export default function CommentHook() {

  const [data, setdata] = useState([]);

  function selectHandler(e) {
    console.log(e.target.value);
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}/comments`)
      .then(response => response.json())
      .then(data => setdata(data))
  }

  return (
    <>
      <hr></hr>
      <h1>Task 2</h1>
      <h3>Here you can select the post for see the comments for this one</h3>
      <select onChange={selectHandler} name="Номер поста">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <div>
        <h3>Comments for selected post:</h3>
        {data.map((item, index) => (
          <section key={item.id}>
            <h3>{index + 1}. {item.email}</h3>
            <p><i>{item.body}</i></p>
          </section>
        ))}
      </div>
    </>
  )
}