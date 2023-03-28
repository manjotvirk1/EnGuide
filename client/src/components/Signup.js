import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    usertype: "",
  });

  const handleSubmit = async (e) => {
    // console.log(credentials)
    e.preventDefault();
    const { userType,name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/user/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ name, email, password, userType }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
     console.log("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="content mt-5 justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="images/undraw_remotely_2j6y.svg"
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign Up</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group first mb-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChange}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChange}
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={onChange}
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="teacher"
                      value="Teacher"
                      onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="teacher">
                      Teacher
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="student"
                      value="Student"
                      checked
                      onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="student">
                      Student
                    </label>
                  </div>

                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-block btn-info"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
