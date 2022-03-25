import React from "react";
import "./App.css";
import Login from "./pages/Login"
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="form-signin">
        <Login />
      </main>
    </div>
  );
}

export default App;
