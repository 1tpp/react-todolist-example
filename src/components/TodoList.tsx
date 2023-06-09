import { Todo } from "../interfaces/todo.interface";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  filterText: string;
  isOnlyCompleted: boolean;
  onTodoDelete: (todoId: number) => void;
  onTodoChange: (todoId: number) => void;
};
export default function TodoList({
  todos,
  filterText,
  isOnlyCompleted,
  onTodoDelete,
  onTodoChange,
}: TodoListProps) {
  const rows: JSX.Element[] = [];
  todos.forEach((todo) => {
    // filter todos with text
    if (
      todo.title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) ===
        -1 &&
      todo.description
        .toLocaleLowerCase()
        .indexOf(filterText.toLocaleLowerCase()) === -1
    ) {
      return;
    }

    // filter todos with completed
    if (isOnlyCompleted && !todo.completed) {
      return;
    }

    rows.push(
      <TodoItem
        key={todo.id}
        todo={todo}
        onTodoDelete={onTodoDelete}
        onTodoChange={onTodoChange}
      />
    );
  });

  return (
    <div>
      <ul className="TodoList">{rows}</ul>
      <p>Showing {rows.length} todos.</p>
    </div>
  );
}
