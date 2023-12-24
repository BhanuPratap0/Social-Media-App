import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/login" element={<Login/>} ></Route>
      <Route exact path="/register" element={<Register/>} ></Route>
      <Route exact path="/profile/:username" element={<Profile/>} ></Route>
    </Routes>
  );
}

export default App;