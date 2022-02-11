import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Addstudent from '../pages/Addstudent';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/add-student" element={<Addstudent/>} />
        </Routes>
    </Router>
  );
}

export default App;
