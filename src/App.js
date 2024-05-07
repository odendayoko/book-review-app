import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/Signup";
import { LoginPage } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
