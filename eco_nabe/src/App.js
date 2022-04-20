import Navbar from './Componets/Navigation/Navbar';
import classes from './App.module.css';
import Common from './Componets/WhatWeDo/Common';
import Comunity from './Componets/Community/Community';
import CommunityList from './Componets/Community/CommunityList';

function App() {
  return (
    <div className={classes.generalWrapper}>
      <Navbar />
      <Common />
      <Comunity />
      <CommunityList />
    </div>
  );
}

export default App;
