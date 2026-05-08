import React, { useState } from "react";
import API from "../services/api";

function Projects() {
  const [project, setProject] = useState({
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("projects/", project);
      alert("Project Created Successfully");
    } catch (error) {
      console.log(error);
      alert("Project creation failed");
    }
  };

  return (
    <div>
      <h1>Create Project</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Project Description"
          onChange={handleChange}
        ></textarea>

        <br /><br />

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default Projects;