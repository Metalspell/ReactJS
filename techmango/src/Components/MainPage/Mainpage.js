import classes from './Mainpage.module.css';
import Button from '@mui/material/Button';

const Mainpage = (setIsOpen) => {
  return (
    <section className={classes.mainWrapper}>
      <article className={classes.logoWrapper}>
        <div className={classes.logo}></div>
        <div className={classes.logoTitle}></div>
      </article>
      <article className={classes.joinUsWrapper}>
        <h1 className={classes.joinUsTitle}>
          Have <pre></pre> an idea?
        </h1>
        <div className={classes.buttonWrapper}>
          <Button aria-label='submit' variant="contained" size='large' className={classes.button} onClick={() => setIsOpen(true)}>
            CONTACT US
          </Button>
          <h2>We will do the rest!</h2>
        </div>
      </article>
    </section>
  );
}

export default Mainpage;