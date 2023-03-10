import React from "react";

export const TodoItems = (props) => {
  return (
    <div className="container">
      <div>
        <b>{props.todo.sno + 1}</b>
        <p>{props.todo.title}</p>
        <p>{props.todo.desc}</p>
        <button className="btn btn-danger btn-sm" 
          onClick={()=> {props.onDelete(props.todo)}}>Delete</button>
      </div>

    </div>

  );
};