import React from 'react';

const ListItem = (props) => {
  const handleDone = (isDone) => {
    return isDone ? 'todo-text done' : 'todo-text';
  }
  return (
    <div>
      <li className="list-item">
        <span className={handleDone(props.content.isDone)} onClick={() => props.markDone(props.id)}>{props.content.text}</span>
        <button className="delete btn" type="submit" onClick={() => props.delete(props.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default ListItem;
