import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = (element) => {
  const login = useSelector((state) => state.login.login);
  if (login) {
    return element;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
