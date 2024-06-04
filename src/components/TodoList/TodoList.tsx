import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Todo, TodoListProps } from "../../types/Todo";
import { getTodos, saveTodos } from "../../services/TodoService";
import "./TodoList.css";

const TodoList: React.FC<TodoListProps> = ({
  initialTodos = [],
  onTodosChange,
}) => {
  const [todos, setTodos] = useState<Todo[]>(
    initialTodos.length ? initialTodos : getTodos()
  );
  const [filter, setFilter] = useState<string>("all");
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    saveTodos(todos);
    if (onTodosChange) {
      onTodosChange(todos);
    }
  }, [todos, onTodosChange]);

  const addTodo = (description: string) => {
    if (description.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        description: description.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo((e.target as HTMLInputElement).value);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewTodo((e.target as HTMLInputElement).value)}
        placeholder="What needs to be done?"
        value={newTodo}
      />
      <div>
        <button
          data-testid="filter-all-button"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          data-testid="filter-active-button"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          data-testid="filter-completed-button"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
