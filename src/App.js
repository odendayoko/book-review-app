import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/Signup";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { UIProvider } from "@yamada-ui/react";

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
