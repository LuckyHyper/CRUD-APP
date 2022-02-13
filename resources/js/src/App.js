import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add';
import Edit from "../pages/Edit";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/add-student" element={<Add/>} />
            <Route path="/edit-student" element={<Edit/>} />
        </Routes>
    </Router>
  );
}

export default App;
