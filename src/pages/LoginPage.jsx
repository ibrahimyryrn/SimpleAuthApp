import { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage({ setIsAuth, setIsAuthenticated }) {
  const [username, setUserName] = useState("user");
  const [password, setPassword] = useState("password");
  // const [token, setToken] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");

      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // setToken("fake - jwt - token"); Normalde backend'den alınan gerçek token buraya konur
        setIsAuthenticated(true);
        setIsAuth(true);
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <h2 className="login-title">Login Page</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value="user"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
