import { useDispatch } from "react-redux";
import { addNewUsers } from "../Action";
import React from 'react';

const AddUser = () => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    let data = e.target.elements;
    dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value));
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="passport" defaultValue="AH-230437" />
        </div>
        <div>
          <input type="text" name="name" defaultValue="Dmitry" />
        </div>
        <div>
          <input type="text" name="age" defaultValue="35" />
        </div>
        <div>
          <button type="submit">Add new user</button>
        </div>
      </form>
    </div>
  )

}

export default AddUser;