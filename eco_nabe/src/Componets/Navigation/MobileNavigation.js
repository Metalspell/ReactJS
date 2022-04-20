import NavLinks from "./NavLinks";
import classes from './Navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgCloseO } from 'react-icons/cg';
import { useState, useEffect } from "react";

const MobileNavigation = ({ setMenuOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu === true) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }, [openMenu, setMenuOpen]);

  const hamburgerIcon = <AiOutlineMenu className={classes.Hamburger} size='3rem' color='#111111'
    onClick={() => setOpenMenu(!openMenu)} />
  const closeIcon = <CgCloseO className={classes.Hamburger} size='3rem' color='#111111'
    onClick={() => setOpenMenu(!openMenu)} />

  return (
    <nav className={classes.MobileNavigation}>
      {openMenu && <NavLinks />}
      {openMenu ? closeIcon : hamburgerIcon}
    </nav>
  );
}

export default MobileNavigation;