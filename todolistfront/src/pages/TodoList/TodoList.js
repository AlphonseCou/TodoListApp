import React, { useState, useEffect } from "react";
import axios from "axios";
import ToggleButton from "react-bootstrap/ToggleButton";

import "./TodoList.css";

function TodoList() {
  const [, setChecked] = useState();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getAllTodo() {
      try {
        const todos = await axios.get("http://localhost:8080/todos/todo/");
        setTodos(todos.data);
      } catch (error) {}
    }
    getAllTodo();
  }, []);

  function handleChange(todo) {
    axios.put("http://localhost:8080/admin/todos/todo/" + todo.id + "/change", {
      name: todo.name,
      description: todo.description,
      status: todo.status,
    });
  }

  return (
    <>
      <div className="page_todolist">
        <div className="div_todolist">
          {todos.map((todo, i) => {
            return (
              <li className="li_todolist" key={todo.id}>
                {todo.name}
                <div className="status_todo">
                  <ToggleButton
                    className="togglebutton_todo"
                    id="toggle-check"
                    type="checkbox"
                    size="xlg"
                    checked={todo.status}
                    onChange={() => {
                      setChecked(!todo.status);
                      handleChange(todo);
                    }}
                  >
                    Fait
                  </ToggleButton>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TodoList;
