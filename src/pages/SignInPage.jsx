import { useState } from "react";
import "./SignInPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignInPage({ setIsAuthenticated, setIsAuth }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignin(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/users", {
        username,
        password,
      });

      // Gerçek kimlik doğrulamada token burada elde edilir
      if (response.data.password.length > 0) {
        // setToken("fake-jwt-token");  Normalde backend'den alınan gerçek token buraya konur
        alert("Valid credentials");
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
      <div className="signin-page">
        <div className="signin-container">
          <h2 className="signin-title">Sign in Page</h2>
          <form className="signin-form" onSubmit={handleSignin}>
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
            <button className="signin-button">Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
