import classes from './WhatWeBuilt.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

const List = (itemsList) => {
  return (
    <article className={classes.builtListItems}>
      {Object.values(itemsList)[0].map((item, i) => {
        return (
          <div key={i} className={classes.itemOfList} >
            <AiOutlinePlus className={classes.iconPlus} color='#8CBF80' />
            <h4>{item}</h4>
          </div>
        )
      })}
    </article>
  );
}

export default List;