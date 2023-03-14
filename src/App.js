import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
