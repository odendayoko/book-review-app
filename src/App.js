import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/Signup";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
// import { UIProvider } from "@yamada-ui/react";
import { AuthProvider } from "./router/AuthContext";
import { PublicRoute } from "./router/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
