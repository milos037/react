import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-71a81.firebaseio.com/",
});

export default instance;
