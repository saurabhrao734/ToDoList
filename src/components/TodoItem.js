import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={onToggle} className="check">✔</button>
        <button onClick={onDelete} className="delete">🗑</button>
      </div>
    </div>
  );
}

export default TodoItem;
