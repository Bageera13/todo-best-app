import React, { useState } from "react";
import { ITodo } from "../../interfaces/ITodo";
import "./todoItem.scss";
import { IconButton, Checkbox } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

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

  const handlerBtnEdit = () => {
    handlerDisabled();
    setEditTitle(todo.title)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value);
  };

  const editTodo = () => {
    onEdit(todo.id, editTitle);
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
        <Checkbox
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
        {todo.completed ? <></> : <IconButton><ModeEditIcon className="__edit-icon" onClick={handlerBtnEdit} /></IconButton>}
        {isDisabled ? <></> : <IconButton><ClearIcon className="__delete-icon" onClick={() => onDelete(todo.id)} /></IconButton>}
      </div>
    </li>
  );
};
