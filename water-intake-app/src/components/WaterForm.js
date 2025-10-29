import React, { useState } from "react";
import { useSelector } from "react-redux";

function WaterForm() {

  const [water, setWater] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; //items in one page

  const [startDate, setStartDate] = useState(""); // total calculation
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(null);

  const user = useSelector((state) => state.auth.user);

  //Load saved entries from localStorage if available.
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries"))
  );

  const [editingIndex, setEditingIndex] = useState(null);
  const [editAmount, setEditAmount] = useState("");

  function saveEntries(updated) {
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  }

  function addEntry() {
    const selectedDate = date || new Date().toLocaleDateString();
    const alreadyExists = entries.find(
      (e) => e.date === selectedDate && e.user === user?.email
    );
    

    if (alreadyExists) {
      setError("You already added intake for today!");
      return;
    }

    const newEntry = {
      user: user?.email,
      date: selectedDate,
      time: new Date().toLocaleTimeString(),
      amount: Number(water),
    };

    const updated = [...entries, newEntry];
    saveEntries(updated);
    setWater("");
    setDate("");
    setError("");
  }

  function deleteEntry(index) {
    const updated = entries.filter((_, i) => i !== index);
    saveEntries(updated);
  }

  function startEdit(index, amount) {
    setEditingIndex(index);
    setEditAmount(amount);
  }

  function saveEdit(index) {
    const updated = [...entries];
    updated[index].amount = Number(editAmount);
    saveEntries(updated);
    setEditingIndex(null);
    setEditAmount("");
  }

  const userEntries = entries.filter((e) => e.user === user?.email);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleEntries = userEntries.slice(start, end);

  function nextPage() {
    if (end < userEntries.length) setPage(page + 1);
  }

  function prevPage() {
    if (page > 1) setPage(page - 1);
  }

  //  Function to calculate total between two dates
  function calculateTotal() {
    if (!startDate || !endDate) {
      setTotal("Please select both dates!");
      return;
    }

    const startObj = new Date(startDate);
    const endObj = new Date(endDate);

    const totalAmount = userEntries
      .filter((e) => {
        const entryDate = new Date(e.date);
        return entryDate >= startObj && entryDate <= endObj;
      })
      .reduce((sum, e) => sum + e.amount, 0);

    setTotal(totalAmount > 0 ? `${totalAmount} ml` : "No entries found!");
  }

  return (
    <div className="container my-4 p-4 border rounded shadow-sm">
      <h2 className="mb-4 text-center text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg> Daily Water Intake Tracker</h2>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {/* form */}
      <div className="mb-4 p-3 border rounded">
        <h4 className="mb-3 text-secondary">Add New Entry</h4>
        <div className="row g-3">
          <div className="col-md-5">
            <input
              type="number"
              className="form-control"
              placeholder="Enter water intake (ml)"
              value={water}
              onChange={(e) => setWater(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button 
              onClick={addEntry} 
              className="btn btn-primary w-100"
              disabled={!water || isNaN(Number(water)) || Number(water) <= 0}
            >
              Add Entry
            </button>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="mb-4">
        <h3 className="mb-3 text-secondary">Your Entries</h3>
        {visibleEntries.length === 0 ? (
          <div className="alert alert-info">No entries found for your account.</div>
        ) : (
          <ul className="list-group">
            {visibleEntries.map((e, index) => {
              const realIndex = start + index;
              return (
                <li key={realIndex} className="list-group-item d-flex justify-content-between align-items-center">
                  {editingIndex === realIndex ? (
                    <div className="d-flex align-items-center w-100">
                      <input
                        type="number"
                        className="form-control me-2"
                        value={editAmount}
                        onChange={(ev) => setEditAmount(ev.target.value)}
                        style={{ maxWidth: '120px' }}
                      />
                      <button 
                        onClick={() => saveEdit(realIndex)} 
                        className="btn btn-success btn-sm me-2"
                        disabled={!editAmount || isNaN(Number(editAmount)) || Number(editAmount) <= 0}
                      >
                        Save
                      </button>
                      <button 
                        onClick={() => setEditingIndex(null)} 
                        className="btn btn-secondary btn-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="w-100 d-flex justify-content-between align-items-center">
                      <span>
                        <span className="fw-bold">{e.date}</span> — {e.amount}ml at <small className="text-muted">{e.time}</small>
                      </span>
                      <div>
                        <button
                          onClick={() => startEdit(realIndex, e.amount)}
                          className="btn btn-outline-warning btn-sm me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEntry(realIndex)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* pagination */}
      {userEntries.length > itemsPerPage && (
        <nav aria-label="Page navigation" className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={prevPage}>Previous</button>
            </li>
            <li className="page-item disabled">
              <span className="page-link">Page {page} of {Math.ceil(userEntries.length / itemsPerPage)}</span>
            </li>
            <li className={`page-item ${end >= userEntries.length ? 'disabled' : ''}`}>
              <button className="page-link" onClick={nextPage}>Next</button>
            </li>
          </ul>
        </nav>
      )}

      {/* calculations */}
      <hr className="my-4"/>
      <div className="p-3 border rounded bg-light">
        <h3 className="mb-3 text-secondary">Calculate Total Intake</h3>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="startDate" className="col-form-label">Start Date:</label>
          </div>
          <div className="col-md-3">
            <input
              id="startDate"
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="endDate" className="col-form-label">End Date:</label>
          </div>
          <div className="col-md-3">
            <input
              id="endDate"
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button 
              onClick={calculateTotal} 
              className="btn btn-success w-100"
              disabled={!startDate || !endDate}
            >
              Calculate
            </button>
          </div>
        </div>
        
        {total && (
          <p className={`mt-3 mb-0 ${total.includes('No entries') || total.includes('Please select') ? 'text-danger' : 'text-success fw-bold'}`}>
            Total: {total}
          </p>
        )}
      </div>
    </div>
  );
}

export default WaterForm;
