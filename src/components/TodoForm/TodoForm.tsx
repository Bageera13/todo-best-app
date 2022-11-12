import React, { useState } from "react";
import "./todoForm.scss";

type PropsTodoForm = {
  onAdd(title: string): void;
};

export const TodoForm: React.FC<PropsTodoForm> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && title.trim()) {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="todo-form">
      <label className="__lable-title" htmlFor="title">
        Введите название дела
      </label>
      <input
        id="title"
        className="__input"
        value={title}
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        type="text"
        placeholder="Что будем делать?"
      />
    </div>
  );
};
