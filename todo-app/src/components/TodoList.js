import React from 'react';
import Todo from './Todo'

const List = (props) => {
  return (
    <ul>
      {props.listItems.map((item, index) => (
        <Todo content={item} key={index} delete={props.delete} id={index} markDone={props.markDone}/>
      ))}
    </ul>
  );
}
 
export default List;
