import "./App.css";
import { useState } from "react";
import { Todo, NewTodo } from "./interfaces/todo.interface";

import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import FilterableTodoList from "./components/FilterableTodoList";

const todosMock: Todo[] = [
  {
    id: `${uuidv4()}`,
    title: "How to use Tailwind",
    description: "Learn Tailwind",
    completed: false,
  },
  {
    id: `${uuidv4()}`,
    title: "What is State Management",
    description: "Learn State Management",
    completed: true,
  },
  {
    id: `${uuidv4()}`,
    title: "How to use React Router",
    description: "Learn React Router",
    completed: false,
  },
  {
    id: `${uuidv4()}`,
    title: "How to use React",
    description: "Learn React",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(todosMock);

  const handleTodoAdd = (todo: NewTodo) => {
    const newTodo: Todo = {
      id: `${uuidv4()}`,
      title: todo.title,
      description: todo.description,
      completed: false,
    };
    const newTodos = [...todos, newTodo]; // destructuring + spread operator
    setTodos(newTodos);
  };

  const handleTodoDelete = (todoId: string) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId); // filter returns a new array
    setTodos(newTodos);
  };

  const handleTodoChange = (todoId: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onTodoAdd={handleTodoAdd} />
      <FilterableTodoList
        todos={todos}
        onTodoDelete={handleTodoDelete}
        onTodoChange={handleTodoChange}
      />
    </div>
  );
}

export default App;
