import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        console.log("Logged out");
        navigate('/login');
    }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#847ef4"}}>
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
                    <form className="d-flex">
                    {!localStorage.getItem('token') &&
                    <Link className="btn btn-light mx-1" to="/login" role="button">Login</Link> }
                    {!localStorage.getItem('token') &&
                    <Link className="btn btn-light mx-1" to="/signup" role="button">Signup</Link>}
                    {localStorage.getItem('token') &&
                    <button onClick={handleLogout} className="btn btn-light">Logout</button>}
                    </form>
                    
                </div>
            </nav>
    </div>
  );
};

export default Navbar;