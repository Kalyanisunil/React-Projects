import React, { useState } from "react";

function WaterForm() {
  const [quantity, setQuantity] = useState("");
  const username = localStorage.getItem("loggedInUser");
  const key = "waterData_" + username;

  function handleAdd(e) {
    e.preventDefault();
    const entries = JSON.parse(localStorage.getItem(key)) || [];
    const today = new Date().toISOString().split("T")[0];
    const alreadyAdded = entries.find((entry) => entry.date === today);

    if (alreadyAdded) {
      alert("You already added today's water intake!");
      return;
    }

    const newEntry = {
      date: today,
      time: new Date().toLocaleTimeString(),
      quantity: Number(quantity),
    };

    entries.push(newEntry);
    localStorage.setItem(key, JSON.stringify(entries));
    alert("Water intake added successfully!");
    setQuantity("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Today's Water Intake</h2>
      <form onSubmit={handleAdd}>
        <input
          type="number"
          placeholder="Enter quantity (in liters)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default WaterForm;
