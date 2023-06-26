import React from "react";

function Login() {
  return (
    <section id="login">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title" />
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email" style={{ paddingTop: 13 }}>
              &nbsp;Email
            </label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              required=""
            />
            <div className="form-border" />
            <label htmlFor="user-password" style={{ paddingTop: 22 }}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required=""
            />
            <div className="form-border" />
            <a href="#">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input
              id="submit-btn"
              type="submit"
              name="submit"
              defaultValue="LOGIN"
            />
            <a href="./Register" id="signup">
              Don't have account yet ?
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
