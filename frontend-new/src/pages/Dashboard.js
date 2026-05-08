import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get("dashboard/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="card-container">
        <div className="card">
          <h3>Total Tasks</h3>
          <p>{data.total_tasks}</p>
        </div>

        <div className="card">
          <h3>Todo Tasks</h3>
          <p>{data.todo_tasks}</p>
        </div>

        <div className="card">
          <h3>Done Tasks</h3>
          <p>{data.done_tasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;