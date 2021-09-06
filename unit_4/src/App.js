import './App.css';
import React from 'react';
import { useState } from 'react';

const task2ref = React.createRef();
const checkbox = React.createRef();
const task5ref = React.createRef();
const task6ref = React.createRef();
const task8ref = React.createRef();
const task9ref = React.createRef();
const task10ref = React.createRef();

function App() {
  let count4 = 0;

  const [stateTask6, setstateTask6] = useState('');

  // states of task7
  const [state1, setstate1] = useState(0);
  const [state2, setstate2] = useState(0);
  const [state3, setstate3] = useState(0);

  const [stateTask9, setstateTask9] = useState('');

  function task1() {
    console.log('task2');
  }

  function task2() {
    task2ref.current.classList.add('active');
  }

  function task3(event) {
    console.log(event.target.value);
  }

  function task4() {
    count4++;
    console.log(count4);
  }

  function task5() {
    if (checkbox.current.checked) {
      let dataAttr = checkbox.current.attributes.currentValue.nodeValue;
      task5ref.current.innerHTML = dataAttr;
    } else {
      task5ref.current.innerHTML = 0;
    }
  }

  function task6() {
    setstateTask6(task6ref.current.value);
  }

  function task7() {
    let wrap = document.querySelector('.block-7');

    function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min)
    };

    setstate1(randomInt(0, 255));
    setstate2(randomInt(0, 255));
    setstate3(randomInt(0, 255));

    wrap.style.background = `rgba(${state1},${state2},${state3})`;
  }

  function task8(e) {
    if (!isNaN(e.key)) {
      task8ref.current.innerHTML += 1;
    } else {
      task8ref.current.innerHTML += 0;
    }
  }

  function task9() {
    setstateTask9(task9ref.current.value);
  }

  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(task10ref.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ref={task2ref}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" onInput={task3} className="task-3" />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" onChange={task5} ref={checkbox} currentValue="55" />
        <div className="out-5" ref={task5ref}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={task6ref} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" >{stateTask6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={task8ref}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={task9ref}></input>
        <div className="out-9">{stateTask9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={task10ref}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;