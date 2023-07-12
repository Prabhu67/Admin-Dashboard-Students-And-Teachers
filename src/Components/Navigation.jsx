import React from "react";
import { useContext } from "react";
import DashboardMain from "./DashboardMain";
import AuthContext from "../Context/AuthContext";
import Login from "./Login";

const Navigation = () => {
  const context = useContext(AuthContext);
  return (
    <>
      {/* Conditioncally rendering component using the status of the authentication */}
      {context.isLoggedIn && <DashboardMain />}
      {!context.isLoggedIn && <Login />}
    </>
  );
};

export default Navigation;
