import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./TodoList.css";

function TodoList() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="todolist">
        <li>
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
      </div>
    </>
  );
}

export default TodoList;
