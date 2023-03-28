import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const handleLogout=()=>{

  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">EnGuide</Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/assignment">Assignment</Link>
                        </li>
                    </ul>
                    {/* {!localStorage.getItem('token')? */}
                    <form className="d-flex">
                    <Link className="btn btn-outline-info mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-outline-info mx-1" to="/signup" role="button">Signup</Link>
                    </form>
                    {/* : */}
                    {/* <button onClick={handleLogout} className="btn btn-primary">Logout</button> */}
                    {/* } */}
                </div>
            </nav>
    </div>
  );
};

export default Navbar;