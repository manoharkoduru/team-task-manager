import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
  <h2>Team Task Manager</h2>

  <div className="nav-links">
    <Link to="/">Dashboard</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/login">Login</Link>
  </div>
</nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;