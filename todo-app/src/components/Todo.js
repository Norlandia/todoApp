import React from 'react';

const ListItem = (props) => {
  return (
    <div>
      <li>
        <span>{props.content}</span>
        <button type="submit" onClick={() => props.delete(props.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default ListItem;
