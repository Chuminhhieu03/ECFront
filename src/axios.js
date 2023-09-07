import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecback.onrender.com",
});

export default instance;
