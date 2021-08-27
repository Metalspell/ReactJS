
function Nav(props) {
  let data = props.navData;
  let listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
  
  return (
    <>
      <nav>
        <ul className="main-navigation">
          {listItem}
        </ul>
      </nav>
    </>
  );
}

export default Nav;