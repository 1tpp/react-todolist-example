import { Todo } from "../interfaces/todo.interface";
import TodoItemDetail from "./TodoItemDetail";

type TodoItemProps = {
  todo: Todo;
  onTodoDelete: (todoId: string) => void;
  onTodoChange: (todoId: string) => void;
};

export default function TodoItem({
  todo,
  onTodoDelete,
  onTodoChange,
}: TodoItemProps) {
  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onTodoChange(todo.id)}
      />
      <TodoItemDetail todo={todo} />
      <button onClick={() => onTodoDelete(todo.id)}>Delete</button>
    </li>
  );
}

