import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./page";

const App = () => {
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
