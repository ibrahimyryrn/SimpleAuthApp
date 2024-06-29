import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setIsAuth, setIsAuthenticated, isAuthenticated }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsAuthenticated(false);
    // Optionally, clear any tokens or session data here
    setIsAuth(false);
    navigate("/");
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) =>
                isActive ? { color: "#aaaaaa" } : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive ? { color: "#aaaaaa" } : undefined
              }
              end
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? { color: "#aaaaaa" } : undefined
              }
              end
            >
              About
            </NavLink>
          </li>

          {isAuthenticated ? undefined : (
            <li>
              <NavLink
                to="/signin"
                style={({ isActive }) =>
                  isActive ? { color: "#aaaaaa" } : undefined
                }
                end
              >
                Sign in
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "#aaaaaa" } : undefined
              }
              end
            >
              {isAuthenticated ? (
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                "Login"
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
