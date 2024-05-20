import React, { useState } from "react";

const TicketPurchaseComponent = () => {
  const [route, setRoute] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePurchase = (e) => {
    e.preventDefault();
    // Handle ticket purchase logic
    console.log(
      `Route: ${route}, Ticket Type: ${ticketType}, Payment Method: ${paymentMethod}`
    );
  };

  return (
    <div>
      <h2>Purchase Ticket</h2>
      <form onSubmit={handlePurchase}>
        <label>
          Route:
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Ticket Type:
          <select
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            required
          >
            <option value="">Select Ticket Type</option>
            <option value="single">Single Ride</option>
            <option value="daily">Daily Pass</option>
            <option value="monthly">Monthly Pass</option>
          </select>
        </label>
        <br />
        <label>
          Payment Method:
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
};

export default TicketPurchaseComponent;
