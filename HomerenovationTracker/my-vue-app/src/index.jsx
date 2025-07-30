
import { Route, Routes } from "react-router-dom";
import SignupUser from "./Components/signup";
import LoginUser from "./Components/login";
import Home from "./Components/Home"; 
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/loginUser" replace />} />
      <Route path="/loginUser" element={<LoginUser />} />
      <Route path="/signupUser" element={<SignupUser />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;