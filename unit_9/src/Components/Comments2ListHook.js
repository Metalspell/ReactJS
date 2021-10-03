import React, { useState, useEffect } from 'react';

export default function Comments2ListHook(props) {

  const [state, setstate] = useState([])

  const onlyEven = () => {
    let arrOfEvenComments = []
    for (let key in props.data) {
      if (props.data[key].id % 2 === 0) {
        arrOfEvenComments.push(props.data[key])
      }
    }
    setstate(arrOfEvenComments);
  }

  useEffect(() => {
    console.log('effect');
    if (props.data.length > 0) setstate(props.data);
  }, [props]);

  return (
    <div>
      <hr />
      <h1>Task 6</h1>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      <div>
        {state.map((item, index) => (
          <section key={item.id}>
            <h3>{index + 1}. {item.email}</h3>
            <p><i>{item.body}</i></p>
          </section>
        ))}
      </div>
    </div>
  )
}