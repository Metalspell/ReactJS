import classes from './WhatWeBuilt.module.css';

const InnerBlock = () => {
  return (
    <>
      <article className={classes.innerBlock}>
        <div>
          <h2>15 Minute Neighborhood</h2>
          <p>Everything you regularly need or want is within 15 walking distance.</p>
        </div>
        <div>
          <h2>No Cars on Streets</h2>
          <p>Within the community you walk and bike safely without cars.
            Car sharing and parking available to go outside of community.</p>
        </div>
        <div className={classes.simpleWhiteLine}></div>
      </article>
    </>
  );
}

export default InnerBlock;