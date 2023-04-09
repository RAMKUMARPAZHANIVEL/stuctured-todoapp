import React from 'react'
import { useState } from 'react';
import InputTodo from './inputTodo';
import TodoList from './todoList';
const TodoLogic = () => {
    const[list,setList] = useState([]);
  return (
    <div>
        <InputTodo setList={setList} list={list} />
        <TodoList setList={setList} list={list}/>
    </div>
  )
}

export default TodoLogic