import React from "react";
import AuthContext from "../Context/AuthContext";
import "../App.css";

const Login = () => {
  return (
    <>
      <AuthContext.Consumer>
        {(context) => {
          return (
            <>
              <div className="login__div">
                <h1 className="login__header">
                  Admin Dasboard: Student & Teacher. Click Login button to Login
                  into the system. <br />
                </h1>
                <h4 className="login__title">LOGIN</h4>
                <form
                  onSubmit={() => {
                    context.setLoggedIn(true);
                  }}
                >
                  <input placeholder={"Username"} className="login__input" />
                  <br />
                  <input placeholder={"Password"} className="login__input" />
                  <br />
                  <button type="submit" className="login__submit">
                    Login
                  </button>
                </form>
                <h5 className="text__alert">
                  Enter any value for username and password
                </h5>
              </div>
            </>
          );
        }}
      </AuthContext.Consumer>
    </>
  );
};

export default Login;
