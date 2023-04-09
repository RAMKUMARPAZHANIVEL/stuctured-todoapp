import React from 'react'
import Header from './header';
import TodoLogic from './todoLogic';
const TodoApp = () => {
  return (
    <div className='todo-container'>
    <Header />
    <TodoLogic />
    </div>
  )
}

export default TodoApp