import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">Accueil</Link>
      <div className="header_center">
        <Link to="/todolist">Afficher la liste de taches</Link>
      </div>
    </div>
  );
}

export default Header;
