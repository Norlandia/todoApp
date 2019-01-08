import React from 'react';

const List = (props) => {
  return (
    <ul>
      {props.listItem.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}
 
export default List;
