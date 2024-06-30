import { useState } from "react";
import "./SignInPage.css";
import { useNavigate } from "react-router-dom";

function SignInPage({ setIsAuthenticated, setIsAuth }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();

    // Kullanıcı adı ve şifreyi localStorage'a kaydet
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Valid credentials");
    setIsAuthenticated(true);
    setIsAuth(true);
    navigate("/home");
  }

  return (
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
  );
}

export default SignInPage;
