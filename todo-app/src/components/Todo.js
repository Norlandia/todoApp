import React from 'react';

const ListItem = (props) => {
  return (
    <div>
      <li key={props.key}>
      <span>{props.content}</span>
      <button>Delete</button>      
      </li>
    </div>
  );
}
 
export default ListItem;
