import React, { useEffect, useState } from "react";
import style from "./UserProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserDetails,
  selectIsAuthenticated,
  selectUser,
  selectUserDetails,
} from "../app/features/users/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

function UserProfile() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);
  const userInformation = useSelector(selectUserDetails);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: location } });
    }
    if (currentUser) {
      dispatch(fetchUserDetails({ userId: currentUser.user.id }));
    }
  }, [currentUser, dispatch]);

  return (
    <div className={style.container}>
      {userInformation ? (
        <div className={style.infoContainer}>
          <h2>Hello {userInformation.username}</h2>
          <p>
            Username: <span>{userInformation.username}</span>
          </p>
          <p>
            Email: <span>{userInformation.email}</span>
          </p>
        </div>
      ) : (
        <p>Could not fetch user information</p>
      )}
    </div>
  );
}

export default UserProfile;
