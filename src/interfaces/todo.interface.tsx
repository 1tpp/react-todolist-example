export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface NewTodo {
  title: string;
  description: string;
}