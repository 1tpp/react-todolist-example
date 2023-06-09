import { Todo } from "../interfaces/todo.interface";

type TodoItemDetailProps = {
  todo: Todo;
};

export default function TodoItemDetail({ todo }: TodoItemDetailProps) {
  const completedStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    fontWeight: todo.completed ? "normal" : "bold",
    color: todo.completed ? "red" : "black",
    textAlign: "left",
  } as React.CSSProperties;

  return (
    <div style={completedStyle}>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
}
