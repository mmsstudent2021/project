import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toast } from "./components/ui/toast";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
