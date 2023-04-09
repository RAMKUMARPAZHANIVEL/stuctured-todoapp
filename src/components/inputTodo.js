import React from 'react'
import { useState,useRef,useEffect } from 'react';

const InputTodo = ({setList,list}) => {
    
    const[todo,setTodo] = useState("");
    const searchRef = useRef();
    const createTodo = (e) => {
        e.preventDefault();
        console.log(e);
        const todo = searchRef.current.value;
        console.log(todo);
       
         setTodo(todo);
         e.target[0].value = "";
         console.log(e.target[0].value);
         let todos = localStorage.getItem("todos");
         if (todos) {
           todos = JSON.parse(todos);
           todos.push(todo);
           localStorage.setItem("todos", JSON.stringify(todos))
         } else {
           localStorage.setItem("todos", JSON.stringify([todo]))
         }
         
      }
      useEffect(()=> {
        if(todo){
          setList(curList => {
            console.log([...curList,todo]);
              return [...curList,todo];
           })
        }
        
        },[todo])
  return (
    <>
     <form onSubmit={createTodo}>
     <input type="text" name="search" placeholder='Enter Todo' id="search" ref={searchRef}/>
     <button type='submit'>Add</button>
     </form>
    </>
  )
}

export default InputTodo