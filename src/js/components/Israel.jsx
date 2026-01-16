import React, { useState } from "react";
import TodoList from "./TodoList";

function Israel() {
  const [view, setView] = useState("israel");

  return (
    <div className="container text-center">

      {view === "israel" && (
        <>
          <h1 className="mt-5">Israel To-do List</h1>
          <hr></hr>
          <h2>Add or edit current tasks</h2>
          <p>Please choose a user to modify tasks</p>
          <button
            className="modificarUsuario mb-3 mx-auto"
            onClick={() => setView("todo")} 
          >
            Israel
          </button>
        </>
      )}

      {view === "todo" && (
        <TodoList volver={() => setView("israel")} /> 
      )}

    </div>
  );
}

export default Israel;
