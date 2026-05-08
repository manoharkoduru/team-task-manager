import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-2pzj.onrender.com"
});

export default API;