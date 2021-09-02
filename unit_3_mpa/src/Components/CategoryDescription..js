import { useParams } from "react-router-dom";

function CategoryDescription() {
  let { catDesc } = useParams();
  return (
    <>
      <h1>Category: {catDesc}</h1>
      <a href="/cat">Назад</a>
    </>
  );
}

export default CategoryDescription;