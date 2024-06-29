import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import SignInPage from "./pages/SignInPage";

function App() {
  const [isAuth, setIsAuth] = useState(false); //if not login do not click anythings
  const [isAuthenticated, setIsAuthenticated] = useState(false); //switch the button name to  login or logout

  return (
    <>
      <Navbar
        setIsAuth={setIsAuth}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setIsAuth={setIsAuth}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuth={isAuth}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuth={isAuth}>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute isAuth={isAuth}>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <SignInPage
              setIsAuth={setIsAuth}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
