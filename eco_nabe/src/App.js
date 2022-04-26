import Navbar from './Componets/Navigation/Navbar';
import classes from './App.module.css';
import Common from './Componets/WhatWeDo/Common';
import Comunity from './Componets/Community/Community';
import CommunityList from './Componets/Community/CommunityList';
import CarouselSlider from './Componets/CarouselSlider/Carousel';
import Services from './Componets/Services/Services';
import WhatWeBuilt from './Componets/WhatWeBuilt/WhatWeBuilt';
import BuiltComponents from './Componets/BuiltComponents/BuiltComponents';

function App() {
  return (
    <>
      <section className={classes.generalWrapper}>
        <Navbar />
        <Common />
        <Comunity />
        <CommunityList />
      </section>
      <CarouselSlider />
      <section className={classes.generalWrapper}>
        <Services />
      </section>
      <WhatWeBuilt />
      <section className={classes.generalWrapper}>
        <BuiltComponents />
      </section>
    </>
  );
}

export default App;
