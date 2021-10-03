import React from 'react';

export default function CommentsListHook(props) {
  return (
    <div>
      {props.data.map((item, index) => (
        <section key={item.id}>
          <h3>{index + 1}. {item.email}</h3>
          <p><i>{item.body}</i></p>
        </section>
      ))}
    </div>
  )
}