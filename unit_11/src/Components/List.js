function List(data) {
  console.log(data.user);

  return (
    <ul>
      {data.user.map((elem, index) =>
        <li key={index.toString()}>
          <p>Passport:{elem.passport}</p>
          <p>Name:{elem.name}</p>
          <p>Age:{elem.age}</p>
        </li>)}
    </ul>
  );
}

export default List;