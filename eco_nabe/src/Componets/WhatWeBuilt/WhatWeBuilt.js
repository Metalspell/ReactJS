import classes from './WhatWeBuilt.module.css';
import BuiltSustainablyAndHealthy from './BuiltSustainablyAndHealthy';
import InnerBlock from './InnerBlock';
import SustainableOperated from './SustainablyOperated';

const WhatWeBuilt = () => {
  return (  
    <section className={classes.mainWrapper}>
      <article className={classes.wrapperForLogo}>
        <div className={classes.logo}></div>
      </article>
      <InnerBlock />
      <BuiltSustainablyAndHealthy />
      <SustainableOperated />
    </section>
  );
}
 
export default WhatWeBuilt;