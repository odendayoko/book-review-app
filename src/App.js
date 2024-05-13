import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/Signup";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
// import { UIProvider } from "@yamada-ui/react";
import { AuthProvider } from "./router/AuthContext";
import { PublicRoute } from "./router/PublicRoute";
import { ProfilePage } from "./pages/Profile";
import { NewBookPage } from "./pages/NewBook";

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/new" element={<NewBookPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
