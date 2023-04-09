import React from "react";
import { useState } from "react";
const TodoItem = ({editTodo,deleteTodo,elem,idx}) => {
  return (
    <>
      <tr key={idx}>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <p>{elem}</p>
        </td>
        <td>
          <button onClick={() => editTodo(idx, elem)}>Edit</button>
        </td>
        <td>
          <button onClick={() => deleteTodo(idx)}>delete</button>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
