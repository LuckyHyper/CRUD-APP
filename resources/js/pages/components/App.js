import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
//import addStudent from '../pages/addStudent';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Student/>} />
            <Route exact path="/about" element={<Student/>} />
        </Routes>
    </Router>
  );
}

export default App;
