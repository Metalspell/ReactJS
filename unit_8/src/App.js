import React, {useState} from 'react';
import './App.css';

function App() {
  const [state1, setstate1] = useState([]);
  const task8ref = React.createRef();

  const h1 = React.createElement('h1', {}, 'unit_08');

  const h2 = React.createElement('h1', {
    'className': 'text-orange'
  }, 'header 2');

  const p = React.createElement('p', {
    'style': {
      'color': 'red'
    }
  }, 'this is p');

  const input = React.createElement('input', {
    'value': 55
  })

  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');

  const div = React.createElement('div', {
    'className': 'text-grey'
  }, p1, p2);

  let f1 = () => {
    let ourArr = [...state1];
    if (task8ref.current.value !== '') {
      ourArr.push(task8ref.current.value)
    }
    setstate1(ourArr);
  }

  let liElems = state1.map((item, index) => <li key={index.toString()}>{item}</li>)

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <input ref={task8ref} type="text" />
      <button onClick={f1}>Push</button>
      <ul>{liElems}</ul>
    </>
  );
}

export default App;
