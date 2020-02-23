import React from "react";
import "../styles.css";

function Todos({ todo, onDelete, onToggle }) {
  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.checked} onChange={onToggle} />
      <button onClick={onDelete}>delete</button>
      <span>
        {todo.text} <b>{todo.id}</b>
      </span>
    </li>
  );
}

export default Todos;
