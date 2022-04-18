import classes from './WhatWeDo.module.css';

const Common = () => {
  return (
    <section className={classes.mainWrapper}>
      <article className={classes.generalTitleWrapper}>
        <h1 className={classes.generalTitle}>We develop and operate environmentally sustainable <span className={classes.titleFirstSpan}>spaneighborhood communities</span> that provide a <span className={classes.titleSecondSpan}>high quality of life</span></h1>
      </article>
      <article>
        <div className={classes.mainPic} alt="">
          <div className={classes.arrowIntoSquare} alt=""></div>
          <div className={classes.picIntoMain} alt=""></div>
        </div>
      </article>
    </section>
  );
}

export default Common;