import React from "react";
// import Navbar from "../navbar/Navbar";
// import Sidebar from "../sidebar/Sidebar";
import "../css/home.css";
import Main from "./main/Main";
import Login from "./Login";

function Home() {
  return (
    <div className="container">
      <div className="home">{localStorage.getItem("token") && <Main />}</div>
    </div>
  );
}

export default Home;
