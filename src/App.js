import "./App.css";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import { Route, Routes, Navigate } from "react-router-dom";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Sign-Up" element={<SignUp />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default App;
