import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodoForm />
  );
}

export default App;
