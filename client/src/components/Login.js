import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import "../css/Login.css";

const Login =()=> {
  let navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // console.log(credentials);
    e.preventDefault();
    const { email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img
                  src="images/profiles.jpeg"
                  alt="profile"
                  className="profile"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <h1>Login Here!!</h1>
              <div>
                <img src="images/email.png" alt="email" className="email" />
                <input
                  type="text"
                  placeholder="Email"
                  className="name"
                  name="email"
                  onChange={onChange}
                />
              </div>
              <div className="second-input">
                <img src="images/pass.png" alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                  name="password"
                  onChange={onChange}
                />
              </div>
              <div className="login-button">
                <button  type="submit" className="btncs">Login</button>
              </div>
            </form>

            <p className="link mt-2">
              Don't have account?
              <a href="signup">Sign Up</a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
