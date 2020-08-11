import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
//global axios
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
