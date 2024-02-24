import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);
