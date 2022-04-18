import { motion } from 'framer-motion'

const NavLinks = () => {
  const animateFrom = { opcaity: 0, y: -40 }
  const animateTo = { opcaity: 1, y: 0 }
  return (
    <nav>
      <ul>
        <motion.li transition={{delay:0.05}} initial={animateFrom} animate={animateTo}><a href="/">Home</a></motion.li>
        <motion.li transition={{delay:0.10}} initial={animateFrom} animate={animateTo}><a href="/about">About</a></motion.li>
        <motion.li transition={{delay:0.20}} initial={animateFrom} animate={animateTo}><a href="/investing_opportunities">Investing opportunities</a></motion.li>
        <motion.li transition={{delay:0.30}} initial={animateFrom} animate={animateTo}><a href="contacts">Contact</a></motion.li>
      </ul>
    </nav>
  );
}

export default NavLinks;