import './App.css';

let text = 'test variable';
let text2 = '222';

const style = {
  fontSize: '24px',
  fontStyle: 'italic',
  color: 'red'
}

function App() {
  return (
    <>
      <div className="container">
        <h1 style={style}>app_1</h1>
        <img src="/images/dreamplace.jpg" alt="pic" /><ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
