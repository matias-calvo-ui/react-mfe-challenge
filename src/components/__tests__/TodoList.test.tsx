import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "../TodoList/TodoList";

test("adds a new todo item", () => {
  render(<TodoList />);

  // Create New Item
  const inputElement = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(inputElement, { target: { value: "Test Add Todo" } });
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
  expect(screen.getByText("Test Add Todo")).toBeInTheDocument();
});

test("toggles todo item completion", () => {
  render(<TodoList />);

  // Create New Item
  const inputElement = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(inputElement, { target: { value: "Test Toggle Todo" } });
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

  // Toggle Item
  const TodoItem = screen.getByTestId("todo-item-test-toggle-todo");
  const checkbox = within(TodoItem).getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(screen.getByText("Test Toggle Todo")).toHaveStyle(
    "text-decoration: line-through"
  );
});

test("filter todo items", () => {
  render(<TodoList />);

  // Filter Actives
  const activeButtonElement = screen.getByTestId("filter-active-button");
  fireEvent.click(activeButtonElement);
  expect(screen.getAllByRole("checkbox")).toHaveLength(1);

  // Filter Completed
  const completedButtonElement = screen.getByTestId("filter-completed-button");
  fireEvent.click(completedButtonElement);
  expect(screen.getAllByRole("checkbox")).toHaveLength(1);

  // Show All
  const allButtonElement = screen.getByTestId("filter-all-button");
  fireEvent.click(allButtonElement);
  expect(screen.getAllByRole("checkbox")).toHaveLength(2);
});
