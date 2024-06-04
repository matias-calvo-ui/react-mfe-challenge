import React from "react";
import { TodoItemProps } from "../../types/Todo";

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div
      data-testid={`todo-item-${todo.description
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.description}
      </span>
    </div>
  );
};

export default TodoItem;
