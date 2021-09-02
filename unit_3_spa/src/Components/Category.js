import { BrowserRouter as Link } from "react-router-dom";

function Category(props) {
  let categoryNavItems = props.navCategory.map(item => {
    return (<li><Link to={item.path}>{item.text}</Link></li>);
  })

  return (
    <ul>
      {categoryNavItems}
    </ul>
  );
}

export default Category;