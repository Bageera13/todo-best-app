import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { ITodo } from "./interfaces/ITodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const onToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }));
  };

  const onDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
}

export default App;
