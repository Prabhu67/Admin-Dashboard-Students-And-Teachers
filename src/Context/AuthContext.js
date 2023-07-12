import React from "react";

// creating a new context for authentication
const AuthContext = React.createContext({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export default AuthContext;
