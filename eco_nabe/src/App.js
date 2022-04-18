import Navbar from './Componets/Navigation/Navbar';
import classes from './App.module.css';
import Common from './Componets/WhatWeDo/Common';

function App() {
  return (
    <div className={classes.generalWrapper}>
      <Navbar />
      <Common />
    </div>
  );
}

export default App;
