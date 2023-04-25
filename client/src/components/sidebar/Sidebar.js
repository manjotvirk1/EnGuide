import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    //understand the foll. line
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        {/* //logo wali image */}
        <div className="sidebar__img">
          <img src={logo} alt="logo"></img>
          <h1>EnGuide</h1>
        </div>

        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>

      <div className="sidebar__menu">
        {/* <h2>MNG</h2> */}
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="/">Home</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <a href="/dashboard">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>

          <a href="#">My Profile</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-handshake"></i>

          <a href="#">My Class</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>

          <a href="#">My Teachers</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-archive"></i>

          <a href="#">Assignments</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-bye"></i>

          <a href="#">Logout</a>
        </div>
      </div>
      {/* sidebar menu wala */}
    </div>
  );
};

export default Sidebar;
