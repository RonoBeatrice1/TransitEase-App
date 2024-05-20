import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import HomePage from "./pages/HomePage";
import TicketPurchaseComponent from "./components/TicketPurchaseComponent";
import TripPlanningComponent from "./components/TripPlanningComponent";
import DataAnalyticsDashboard from "./components/DataAnalyticsDashboard";
import AccessibilityComponent from "./components/AccessibilityComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />{" "}
        {/* Use element instead of component */}
        <Route path="/purchase" element={<TicketPurchaseComponent />} />
        <Route path="/plan" element={<TripPlanningComponent />} />
        <Route path="/analytics" element={<DataAnalyticsDashboard />} />
        <Route path="/accessibility" element={<AccessibilityComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
