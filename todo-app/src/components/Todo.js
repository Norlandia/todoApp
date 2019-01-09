import React from 'react';

const ListItem = (props) => {
  return (
    <div>
      <li className="list-item">
        <span className="todo-text" onClick={() => props.markDone(props.id)}>{props.content.text}</span>
        <button className="delete btn" type="submit" onClick={() => props.delete(props.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default ListItem;
