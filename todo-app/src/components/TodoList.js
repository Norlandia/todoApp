import React from 'react';
import Todo from './Todo'

const List = (props) => {
  return (
    <ul>
      {props.listItem.map((item, index) => (
        <Todo content={item} key={index}/>
      ))}
    </ul>
  );
}
 
export default List;
