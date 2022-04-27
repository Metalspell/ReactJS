import BuiltCompItems from "./BuiltCompItem";
import classes from './BuiltComponents.module.css';

const BuiltComponents = () => {
  return (
    <article className={classes.mainWrapper}>
      <BuiltCompItems />
    </article>
  );
}

export default BuiltComponents;