import React from "react";

function Register() {
  return (
    <section id="register">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>Register</h2>
            <div className="underline-title" />
          </div>
          <form method="post" className="form">
            <label htmlFor="user-name" style={{ paddingTop: 13 }}>
              &nbsp;Name
            </label>
            <input
              id="user-name"
              className="form-content"
              type="text"
              name="username"
              autoComplete="on"
              required=""
            />
            <div className="form-border" />
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

            <input
              id="submit-btn"
              type="submit"
              name="submit"
              defaultValue="LOGIN"
            />
            <a href="./Login" id="signup">
              Already have an account ?
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
