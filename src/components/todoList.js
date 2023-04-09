import React from 'react'
import { useState } from 'react';
import TodoItem from './todoItem'
const TodoList = ({list,setList}) => {
    const[elementToEdit,setElementToEdit] = useState({
        element : "",
        idx : ""
      });
      const [editValue,setEditValue] = useState("");
      
   
    const editTodo = (idx,elem) => {
        setElementToEdit({
          element : elem,
          id : idx
        })
            
        }
     
      const deleteTodo = (idx) => {
        console.log("delete");
        
        
             console.log(list)
             let todos = localStorage.getItem("todos");
             if (todos) {
                 todos = JSON.parse(todos);
                const filteredList = todos.filter((elem,id) => {
                    return id != idx;
                  } );
             
               localStorage.setItem("todos", JSON.stringify(filteredList))
               setList(filteredList);
               }
             
    }
    
      const updateElement = () => {
                      
             let todos = localStorage.getItem("todos");
             if (todos) {
                
                const updatedList = JSON.parse(todos);
                updatedList[elementToEdit.id] = editValue;
                              
               localStorage.setItem("todos", JSON.stringify(updatedList));
           setList(updatedList);
           setElementToEdit({
            element : "",
            idx : ""
          })
        console.log(list);
      }
    }
    let todos = localStorage.getItem("todos");
  if (todos) {
    todos = JSON.parse(todos);
  } else {
    const todos = [];
  }
  console.log(todos)
  return (
    <div className='todo-container'>
        { elementToEdit.element && 
        (<div className='update-container'>
          <input type='text' name="todo" defaultValue={elementToEdit.element} onKeyUp={(e) => setEditValue(e.target.value)}/>
          <button onClick={updateElement}>update</button>
        </div>)
        }
    <table>
        <tbody>
        {todos && todos.map((elem,idx) => {
             return(
                <TodoItem deleteTodo={deleteTodo} editTodo={editTodo} elem={elem} idx={idx} />
             )
      })
   }
        </tbody>
    </table>
    </div>
  )
}

export default TodoList;