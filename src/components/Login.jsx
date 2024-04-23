import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserDetails,
  selectIsAuthenticated,
  selectUser,
  selectUserStatus,
  userlogin,
} from "../app/features/users/userSlice";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const userStatus = useSelector(selectUserStatus);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function submitForm(e) {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("User name and password are required");
      return;
    }

    dispatch(userlogin({ username, password }));
    setErrorMessage("");
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from);
    }
  }, [isAuthenticated]);

  return (
    <div className={style.container}>
      <p className={style.info}>Login to continue shopping</p>
      <p className={style.error}>{errorMessage}</p>
      <form onSubmit={submitForm}>
        <div className={style.inputDiv}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
        </div>
        <div className={style.inputDiv}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <button className={style.loginBtn}>Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register">Click here to register</Link>
      </p>
    </div>
  );
}

export default Login;
