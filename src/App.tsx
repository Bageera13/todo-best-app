import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { ITodo } from "./interfaces/ITodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((todos) => {setTodos(todos.data)})
  }, [])

  const deleteTodo = (id: number) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  const postTodo = (todo: ITodo) => {
    axios.post('https://jsonplaceholder.typicode.com/todos/posts', {
      body: JSON.stringify({todo}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  const putTodo = (todo: ITodo) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
      body: JSON.stringify({todo}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  const onAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    postTodo(newTodo);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const onToggle = (id: number) => {
    const preparedTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        putTodo(item);
      }
      return item;
    });
    setTodos(preparedTodos);
  };

  const onEdit = (id: number, title: string) => {
    const preparedTodos = todos.map((item) => {
      if (item.id === id) {
        item.title = title;
        putTodo(item);
      }
      return item;
    });

    setTodos(preparedTodos);
  };

  const onDelete = (id: number) => {
    deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={onAdd} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  );
}

export default App;
