import React from 'react';
import "./App.css";
import "./assets/css/theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from 'react-router-dom';
import { Home, About } from "./pages";

export default function App() {
    return (
        <div className="page-wrapper">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}
