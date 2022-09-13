import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="div-title">
        <h1 className="title">Todo List Application</h1>
      </div>
      <Link to="/">
        <Button className="header-button">Accueil</Button>
      </Link>
      <Link to="/todolist">
        <Button className="header-button">Afficher la liste de taches</Button>
      </Link>
    </div>
  );
}

export default Header;
