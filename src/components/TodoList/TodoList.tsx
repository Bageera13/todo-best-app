import React from "react";
import { ITodo } from "../../interfaces/ITodo";
import "./todoList.scss";

type PropsTodoList = {
  todos: ITodo[];
  onToggle(id: number): void;
  onDelete(id: number): void;
};

export const TodoList: React.FC<PropsTodoList> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li className="todo" key={todo.id}>
            <label className="__lable">
              <div className={(todo.completed === true ? '__status --completed' : '__status')} />
              <input
                type="checkbox"
                className="__input-checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span className="__title"> {todo.title} </span>
            </label>
            <div className="__btn-wrapper">
              <button className="__btn-edit" />
              <button className="__btn-delete" onClick={() => onDelete(todo.id)}/>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
