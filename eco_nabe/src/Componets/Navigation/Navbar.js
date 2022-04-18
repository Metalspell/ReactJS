import classes from './Navbar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function Navbar() {
  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.logoImg} alt=""></div>
      <div className={classes.Navbar}>
        <Navigation />
        <MobileNavigation />
      </div>
      <hr className={classes.simpleLine}></hr>
    </div>
  );
}

export default Navbar;