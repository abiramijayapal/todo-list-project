import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        value={todoValue}
        setTodoValue={setTodoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
