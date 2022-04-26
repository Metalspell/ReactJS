import classes from './WhatWeBuilt.module.css';
import List from './List';

const BuiltSustainablyAndHealthy = () => {

  const itemsList = ['Mass Timber structure', 'Passive House Design', 'Well Sealed and Insulated', 'Non Toxic Materials',
    'Sustainably Sourced Materials', 'All Electric Appliances', 'Energy Efficient Appliances',
    'Low Water Use Appliances', 'Solar and Wind Energy Production on Site', 'Permeable outdoor surfaces',
    'Rainwater Catchment', 'Greywater Reuse', 'LEED Platinum'];

  return (
    <article className={classes.builtList}>
      <div className={classes.builtListCentralWrapper}>
        <h1><span>Built</span> Sustainably <pre></pre> and Healthy</h1>
        <List itemsList={itemsList}/>
      </div>
      <div className={classes.previewLogo}>
        <div className={classes.arrowIntoSquare} alt=""></div>
        <div className={classes.ghostBlock}></div>
      </div>
    </article>
  );
}

export default BuiltSustainablyAndHealthy;