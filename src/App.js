import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoApp from "./TodoApp";
import About from "./About"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App container">
               <nav className=" rounded" id="navbar">
          <ul className="d-flex flex-row my-4 py-3 justify-content-center">
            <li>
              <Link to="/" className="custom-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="custom-link">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


