import Navbar from './Componets/Navigation/Navbar';
import classes from './App.module.css';
import Common from './Componets/WhatWeDo/Common';
import Comunity from './Componets/Community/Community';
import CommunityList from './Componets/Community/CommunityList';
import CarouselSlider from './Componets/CarouselSlider/Carousel';
import Services from './Componets/Services/Services';
import WhatWeBuilt from './Componets/WhatWeBuilt/WhatWeBuilt';

function App() {
  return (
    <>
      <div className={classes.generalWrapper}>
        <Navbar />
        <Common />
        <Comunity />
        <CommunityList />
      </div>
      <CarouselSlider />
      <div className={classes.generalWrapper}>
        <Services />
      </div>
      <WhatWeBuilt />
    </>
  );
}

export default App;
