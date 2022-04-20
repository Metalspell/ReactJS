import classes from './Navbar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import { useRef } from 'react';
import { useState, useEffect} from "react";


function Navbar() {
  const menuWrapper = useRef(null);
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    if (menuOpen === true) {
      menuWrapper.current.style.marginBottom = '80vw';
    } else {
      menuWrapper.current.style.marginBottom = '0';
    }
  }, [menuOpen]);

  return (
    <div className={classes.navbarWrapper} ref={menuWrapper}>
      <div className={classes.logoImg} alt=""></div>
      <div className={classes.Navbar}>
        <Navigation />
        <MobileNavigation setMenuOpen={setMenuOpen} />
      </div>
      <hr className={classes.simpleLine}></hr>
    </div>
  );
}

export default Navbar;