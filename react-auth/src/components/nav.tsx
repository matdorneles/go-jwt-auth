import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: { name: string, setName: (name: string) => void }) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }); 

    props.setName('');
  };

  let menu;

  if (props.name === "") {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" to={"/login"}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/register"}>
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" to={"/login"} onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
