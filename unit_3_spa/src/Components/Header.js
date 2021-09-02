function Header(props) {
  let navItem = props.headerNav.map((item, index) => {
    return (
      <li key={index}><a href={item.path}>{item.text}</a></li>
    )
  })

  return (
    <ul>
      {navItem}
    </ul>
  );
}

export default Header;