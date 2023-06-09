import React, { useState } from "react";
import { NewTodo } from "../interfaces/todo.interface";

type TodoFormProps = {
  onTodoAdd: (newTodo: NewTodo) => void;
};

export default function TodoForm({ onTodoAdd }: TodoFormProps) {
  const initialTodoForm = {
    title: "",
    description: "",
  };
  const [todoForm, settodoForm] = useState<NewTodo>(initialTodoForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settodoForm({
      ...todoForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title: todoForm.title,
      description: todoForm.description,
    };
    onTodoAdd(newTodo);
    settodoForm(initialTodoForm);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={todoForm.title}
        onChange={handleChange}
        />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={todoForm.description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
