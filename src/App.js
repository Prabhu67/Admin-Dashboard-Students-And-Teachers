import React from "react";
import "./App.css";
import { useState } from "react";
import AuthContext from "./Context/AuthContext";
import Navigation from "./Components/Navigation";

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <AuthContext.Provider
            value={{
              isLoggedIn: auth,
              setLoggedIn: (value) => {
                setAuth(value);
              },
            }}
          >
            <Navigation />
          </AuthContext.Provider>
        </header>
      </div>
    </>
  );
};

export default App;
