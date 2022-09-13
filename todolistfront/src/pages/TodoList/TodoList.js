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
      <div className="todolist">
        {todos.map((todo, i) => {
          return (
            <li>
              {todo.name}
              <ToggleButton
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Fait
              </ToggleButton>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
