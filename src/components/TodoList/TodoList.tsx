import React from "react";
import { ITodo } from "../../interfaces/ITodo";
import { TodoItem } from "../TodoItem/TodoItem";
import "./todoList.scss";
import { Paper } from '@mui/material';
import {Loader} from '../Loader/Loader'

type PropsTodoList = {
  loading: boolean;
  todos: ITodo[];
  onToggle(id: number): void;
  onDelete(id: number): void;
  onEdit(id:number, title: string): void;
};

export const TodoList = ({ todos, loading, onToggle, onDelete, onEdit }: PropsTodoList) => {
  

  return (
    <Paper className="--paper">
      {loading && <Loader />}
      {(loading || todos.length) ? null : <p>Список дел пуст!</p>}
      <ul className="todo-list">
        {todos.map((todo) => {
          return (<TodoItem onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} todo={todo} />);
        })}
      </ul>
    </Paper>
  );
};
