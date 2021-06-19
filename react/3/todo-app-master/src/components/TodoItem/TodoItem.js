import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  const {id} = props;
  return (
    <>
  <div onClick={(e)=>e.target.classList.toggle("done")}>{content}</div>
  <button className="btn btn-danger todoBtn" onClick={()=>props.del(id)}>sil</button>
  </>
  );
}

export default Todo;
