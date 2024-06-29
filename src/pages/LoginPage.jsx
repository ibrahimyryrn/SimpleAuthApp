import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ setIsAuth }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsAuth(true);
      navigate("/home");
    }
  }, [token, setIsAuth, navigate]);

  async function handleLogin(e) {
    e.preventDefault();

    // LocalStorage'dan kullanıcı adı ve şifreyi al
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      setToken("fake-jwt-token");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login Page</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
