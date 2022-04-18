import NavLinks from "./NavLinks";
import classes from './Navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgCloseO } from 'react-icons/cg';
import { useState } from "react";

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const hamburgerIcon = <AiOutlineMenu className={classes.Hamburger} size='3rem' color='#111111' onClick={() => setOpenMenu(!openMenu)} />
  const closeIcon = <CgCloseO className={classes.Hamburger} size='3rem' color='#111111' onClick={() => setOpenMenu(!openMenu)} />

  return (
    <nav className={classes.MobileNavigation}>
      {openMenu && <NavLinks/>}
      {openMenu ? closeIcon : hamburgerIcon}
    </nav>
  );
}

export default MobileNavigation;