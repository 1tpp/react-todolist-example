export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface NewTodo {
  title: string;
  description: string;
}