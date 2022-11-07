import React, { useState } from "react";

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTitle("");
    }
  };

  return (
    <div>
      <label className="todo-form__lable-title" htmlFor="title">
        Введите название дела
      </label>
      <input
        id="title"
        className="todo-form__input"
        value={title}
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        type="text"
        placeholder="Что будем делать?"
      />
    </div>
  );
};
