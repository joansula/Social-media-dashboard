import React from "react";
import "/src/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "/src/pages/Homepage.jsx";
import Calendar from "/src/pages/Calendar";
import MonthlyReport from "./pages/MonthlyReport";
import WeeklyReport from "./pages/WeeklyReport";
import AdActivity from "./pages/AdActivity";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/monthly-report" element={<MonthlyReport />} />
          <Route path="/weekly-report" element={<WeeklyReport />} />
          <Route path="/ad-activity" element={<AdActivity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
