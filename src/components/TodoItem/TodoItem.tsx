import React, { useState } from "react";
import { ITodo } from "../../interfaces/ITodo";
import "./todoItem.scss";

type PropsTodoItem = {
  todo: ITodo;
  onToggle(id: number): void;
  onDelete(id: number): void;
  onEdit(id: number, title: string): void;
};

export const TodoItem = ({
  onToggle,
  onDelete,
  onEdit,
  todo,
}: PropsTodoItem) => {
  const [editTitle, setEditTitle] = useState<string>(todo.title);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const handlerDisabled = () => {
    setDisabled((prev) => !prev);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value);
  };

  const editTodo = () => {
    onEdit(todo.id, editTitle);
    setEditTitle(todo.title);
    handlerDisabled();
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      editTodo();
    }
  };

  return (
    <li className="todo" key={todo.id}>
      <label className="__lable">
        <input
          type="checkbox"
          disabled={isDisabled}
          className="__input-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={!todo.completed ? "__title" : "__title --completed"}>
          {!isDisabled ? (
            todo.title
          ) : (
            <input
              type="text"
              className="__input-edit"
              onChange={changeHandler}
              value={editTitle}
              onBlur={editTodo}
              onKeyPress={keyPressHandler}
            />
          )}
        </span>
      </label>
      <div className="__btn-wrapper">
        {todo.completed ? <></> : <button className="__btn-edit" onClick={handlerDisabled} />}
        <button className="__btn-delete" onClick={() => onDelete(todo.id)} />
      </div>
    </li>
  );
};
