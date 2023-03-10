import React from "react";
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
  return (
  <div>
    <h1 className="text-center">Todos List</h1>
    {/* {props.todos} */}
    {props.todos.length===0 ? "Not Todos list to display":
        props.todos.map((todos)=>{
            return(
              <TodoItems todo = {todos} key={todos.sno} onDelete={props.onDelete}/>
            );
        })
    }
    
    </div>
    
    );
};