import React, { useState } from "react";

const TripPlanningComponent = () => {
  const [tripDetails, setTripDetails] = useState({
    origin: "",
    destination: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip details:", tripDetails);
  };

  return (
    <div>
      <h2>Trip Planning</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={tripDetails.origin}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={tripDetails.destination}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={tripDetails.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Plan Trip</button>
      </form>
    </div>
  );
};

export default TripPlanningComponent;
