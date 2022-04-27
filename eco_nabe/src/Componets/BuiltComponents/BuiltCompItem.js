import classes from './BuiltComponents.module.css';
import data from './data';

const BuiltCompItems = () => {
  return (
    <>
      <article className={classes.componentItem}>
        <div>
          <h1>Factory <span>Built Components</span> are Assembled on Site</h1>
          <p>Building parts are constructed with minimized waste and precision in a factory. Then assembled on site to decrease onsite construction time.</p>
        </div>
        <div className={classes.picOfInterior}></div>
      </article>
      <article className={classes.componentItem}>
        <div>
          <h1><span>High Quality,</span> Good Design, Affordable</h1>
          <p>Everything is built with good design, quality materials, but not over priced. We are not building high end luxury or strictly affordable housing. Craftmanship and local materials and providers is prioritized.</p>
        </div>
        <div className={classes.picOfInterior}></div>
      </article>
    </>
  );
}

export default BuiltCompItems;