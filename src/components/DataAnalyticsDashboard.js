import React, { useState, useEffect } from "react";
import axios from "axios";

const DataAnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    // Fetch analytics data from API
    axios
      .get("/api/analytics")
      .then((response) => setAnalyticsData(response.data))
      .catch((error) => console.error("Error fetching analytics data:", error));
  }, []);

  return (
    <div>
      <h2>Data Analytics Dashboard</h2>
      {analyticsData ? (
        <div>
          <p>Passenger Demographics: {analyticsData.demographics}</p>
          <p>Travel Patterns: {analyticsData.travelPatterns}</p>
          <p>Revenue Streams: {analyticsData.revenueStreams}</p>
          <p>Operational Performance: {analyticsData.operationalPerformance}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataAnalyticsDashboard;
