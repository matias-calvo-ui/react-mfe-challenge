import { Todo } from "../types/Todo";

const TODO_STORAGE_KEY = "todos";

export const getTodos = (): Todo[] => {
  try {
    const todos = localStorage.getItem(TODO_STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Failed to fetch todos from localStorage", error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  try {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos to localStorage", error);
  }
};
