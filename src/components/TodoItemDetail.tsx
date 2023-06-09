import React from 'react'
import { Todo } from '../interfaces/todo.interface'

type TodoItemDetailProps = {
  todo: Todo;
};

export default function TodoItemDetail({ todo }: TodoItemDetailProps) {
  const title = todo.completed ? (
    <s>{todo.title}</s>
  ) : (
    <strong>{todo.title}</strong>
  );

  const description = todo.completed ? (
    <s>{todo.description}</s>
  ) : (
    <strong>{todo.description}</strong>
  );

  return (
    <div
      style={{
        color: todo.completed ? "red" : "black",
        textAlign: "left",
      }}
    >
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

