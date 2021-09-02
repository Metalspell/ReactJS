function Category(props) {
  let categoryNavItems = props.navCategory.map(item => {
    return(<li><a href={item.path}>{item.text}</a></li>);
  })

  return (
    <ul>
      {categoryNavItems}
    </ul>
  );
}

export default Category;