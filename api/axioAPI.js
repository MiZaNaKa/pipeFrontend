import axios from 'axios';

export default axios.create({
  baseURL: "http://192.168.1.3:3000",
  // baseURL: "https://pipebackendlatest.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  data: {}
});
