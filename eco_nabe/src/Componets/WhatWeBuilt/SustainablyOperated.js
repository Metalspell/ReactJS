import classes from './WhatWeBuilt.module.css';
import List from './List';

const SustainableOperated = () => {

  const itemsList = ['Building System Automation', 'Heating, cooling, lighting based on room occupancy', 'Smart Energy Load Management', 'Indoor Air Quality monitoring',
    'Non Toxic Cleaning Supplies', 'Native Landscaping with Efficient Watering', 'Onsite Composting',
    'Recycle Collection', 'Measure waste, recycle, composting, energy use, water use, and incentivize residents to conserve.', 'Sustainable Food Production: Aeroponics Vertical Indoor Farming',
    'Sustainable Sourced Food Grocery Store', 'Reusable Containers replace packaging', 'LEED Platinum'];

  return (
    <article>
      <article className={classes.builtList}>
        <div className={classes.builtListCentralWrapper}>
          <h1><span>Built</span> Sustainably <pre></pre> and Healthy</h1>
          <List itemsList={itemsList} />
        </div>
      </article>
    </article>
  );
}

export default SustainableOperated;