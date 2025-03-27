import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Authentication from "./Components/Authentication";
import Home from "./Pages/Home";


function App() {
  const navigate = useNavigate();
  
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
  });

  const handleAuthSuccess = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("auth", "true");
    setUser(userData);
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    setUser(null);
    navigate("/");
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Routes>
        <Route
          path="/home/*"
          element={
            user ? (
              <Home
                user={user}
                onLogout={handleLogout}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/"
          element={
            user ? <Navigate to="/home" replace /> : <Authentication onAuthSuccess={handleAuthSuccess} />
          }
        />
        <Route path="*" element={<Navigate to={user ? "/home" : "/"} replace />} />
      </Routes>
    </div>
  );
}

export default App;
