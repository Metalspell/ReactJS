import Navbar from './Componets/Navigation/Navbar';
import classes from './App.module.css';
import Common from './Componets/WhatWeDo/Common';
import Comunity from './Componets/Community/Community';

function App() {
  return (
    <div className={classes.generalWrapper}>
      <Navbar />
      <Common />
      <Comunity />
    </div>
  );
}

export default App;
