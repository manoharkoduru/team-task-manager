import React, { useState } from "react";
import API from "../services/api";

function Tasks() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "TODO",
    assigned_to: 2,
    project: 1
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("tasks/", task);
      alert("Task Created Successfully");
    } catch (error) {
      console.log(error);
      alert("Task creation failed");
    }
  };

  return (
    <div>
      <h1>Create Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Task Description"
          onChange={handleChange}
        ></textarea>

        <br /><br />

        <input
          type="date"
          name="due_date"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default Tasks;