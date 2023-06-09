import { useState } from "react";

import { Todo } from "../interfaces/todo.interface";

import SearchBar from "./SearchBar";
import TodoList from "./TodoList";

type FilterableTodoListProps = {
  todos: Todo[];
  onTodoDelete: (todoId: number) => void;
  onTodoChange: (todoId: number) => void;
};

export default function FilterableTodoList({
  todos,
  onTodoDelete,
  onTodoChange,
}: FilterableTodoListProps) {
  const [filterText, setFilterText] = useState("");
  const [isOnlyCompleted, setIsOnlyCompleted] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isOnlyCompleted={isOnlyCompleted}
        setFilterText={setFilterText}
        setIsOnlyCompleted={setIsOnlyCompleted}
      />
      <TodoList
        todos={todos}
        filterText={filterText}
        isOnlyCompleted={isOnlyCompleted}
        onTodoDelete={onTodoDelete}
        onTodoChange={onTodoChange}
      />
    </div>
  );
}
