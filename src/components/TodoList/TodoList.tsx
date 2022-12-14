import React from "react";
import { ITodo } from "../../interfaces/ITodo";
import { TodoItem } from "../TodoItem/TodoItem";
import "./todoList.scss";
import { Paper } from '@mui/material';

type PropsTodoList = {
  todos: ITodo[];
  onToggle(id: number): void;
  onDelete(id: number): void;
  onEdit(id:number, title: string): void;
};

export const TodoList = ({ todos, onToggle, onDelete, onEdit }: PropsTodoList) => {
  

  return (
    <Paper className="--paper">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (<TodoItem onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} todo={todo} />);
        })}
      </ul>
    </Paper>
  );
};
