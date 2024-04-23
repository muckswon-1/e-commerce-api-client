import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerNewUser,
  selectNewUserRegistered,
  selectUserStatus,
} from "../app/features/users/userSlice";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRegistered = useSelector(selectNewUserRegistered);

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("Enter all missing fields");
      return;
    }

    if (confirmPassword !== password) {
      setErrorMessage("Confirm password is not same as password");
      return;
    }

    const response = await dispatch(
      registerNewUser({
        newUser: {
          username,
          email,
          password,
        },
      }),
    );

    if (response.payload === true) {
      navigate("/login");
    }

    setErrorMessage("");
  };

  useEffect(() => {
    if (isRegistered) {
      navigate("/login");
    }
  }, [isRegistered]);

  return (
    <div className={style.container}>
      <form onSubmit={registerSubmit}>
        <h3>Enter your information to register a new account</h3>
        <p>{errorMessage}</p>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>

        <div>
          <label htmlFor="confirm-password"> Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <button className={style.registerBtn}>Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
