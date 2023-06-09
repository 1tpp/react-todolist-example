import React from "react";
import { Todo } from "../interfaces/todo.interface";

type TodoItemProps = {
  todo: Todo;
  onTodoDelete: (todoId: number) => void;
  onTodoChange: (todoId: number) => void;
};

function TodoCompleted(todo: Todo) {
  return (
    <div style={{ color: "red", textAlign: "left" }}>
      <p style={{ textDecoration: "line-through" }}>{todo.title}</p>
      <p style={{ textDecoration: "line-through" }}>{todo.description}</p>
    </div>
  );
}

export default function TodoItem({
  todo,
  onTodoDelete,
  onTodoChange,
}: TodoItemProps) {
  const todoDetials = todo.completed ? (
    TodoCompleted(todo)
  ) : (
    <div style={{ textAlign: "left" }}>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onTodoChange(todo.id)}
      />
      {todoDetials}
      <button onClick={() => onTodoDelete(todo.id)}>Delete</button>
    </li>
  );
}
