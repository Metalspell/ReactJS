import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const [st1, setst1] = useState([]);
  const [st2, setst2] = useState(0);
  const [st3, setst3] = useState('');
  const [st4, setst4] = useState(0);
  const [st5, setst5] = useState(0);
  const [st6, setst6] = useState('');
  const [st71, setst71] = useState(null);
  const [st72, setst72] = useState(null);
  const [st73, setst73] = useState(null);
  const [st8, setst8] = useState('');
  const [st9, setst9] = useState('');
  const [st10, setst10] = useState([]);

  const task1Ref = React.createRef();
  const task5Ref = React.createRef();
  const task6Ref = React.createRef();
  const task7Ref = React.createRef();
  const task8Ref = React.createRef();
  const task9Ref = React.createRef();
  const task10Ref = React.createRef();


  function task1() {
    let textData = task1Ref.current.value;
    setst1(textData);
  }

  function task2() {
    let count = st2;
    count++;
    setst2(count);
  }

  function task3(e) {
    let textData = e.target.value;
    setst3(textData);
  }

  function task4() {
    let count = st4;
    count++;
    setst4(count);
  }

  function task5() {
    if (task5Ref.current.checked) {
      let dataAttr = task5Ref.current.attributes.currentValue.nodeValue;
      setst5(dataAttr);
    } else {
      setst5(0);
    }
  }

  function task6() {
    setst6(task6Ref.current.value);
  }

  function task7() {
    function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min)
    };

    setst71(randomInt(0, 255));
    setst72(randomInt(0, 255));
    setst73(randomInt(0, 255));

    task7Ref.current.style.background = `rgba(${st71},${st72},${st73})`;
  }

  function task8(e) {
    if (!isNaN(e.key)) {
      task8Ref.current.innerHTML += 1;
      setst8(task8Ref.current.innerHTML);
    } else {
      task8Ref.current.innerHTML += 0;
      setst8(task8Ref.current.innerHTML);
    }
  }

  function task9() {
    setst9(task9Ref.current.value);
  }

  function task10() {
    let textData = task10Ref.current.value;
    setst10(textData);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={task1Ref} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" onInput={task3} className="task-3" />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" onChange={task5} currentValue="55" ref={task5Ref} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={task6Ref}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={task7Ref}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st71} {st72} {st73}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div ref={task8Ref}>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={task9Ref}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={task10Ref}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
