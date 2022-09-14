import React, { useState, useEffect } from "react";
import axios from "axios";
import ToggleButton from "react-bootstrap/ToggleButton";

import "./TodoList.css";

function TodoList() {
  const [checked, setChecked] = useState(false);
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
  return (
    <>
      <div className="page_todolist">
        <div className="div_todolist">
          {todos.map((todo, i) => {
            return (
              <li className="li_todolist" key={todo.name}>
                {todo.name}
                <div className="status_todo">
                  <ToggleButton
                    className="togglebutton_todo"
                    id="toggle-check"
                    type="checkbox"
                    size="xlg"
                    checked={todo.status}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
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
