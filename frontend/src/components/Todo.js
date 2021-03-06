import React from "react";
import { Link } from "react-router-dom";

export default function Todo({ todo }) {
  return (
    <tr>
      <td className={todo.todoCompleted ? "completed" : ""}>{todo.todoDesc}</td>
      <td className={todo.todoCompleted ? "completed" : ""}>
        {todo.todoResponsible}
      </td>
      <td className={todo.todoCompleted ? "completed" : ""}>
        {todo.todoPriority}
      </td>
      <td className="btn btn-info" >
        <Link style={{ color:"#fff" }} to={`/edit/${todo._id}`}>Edit</Link>
      </td>
    </tr>
  );
}
