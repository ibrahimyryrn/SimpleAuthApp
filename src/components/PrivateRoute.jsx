import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default PrivateRoute;
