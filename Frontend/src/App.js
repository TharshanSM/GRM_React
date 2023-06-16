import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/main" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/employee" element={<EmployeePage />} />
            </Routes>
        </Router>
    );
};

export default App;
