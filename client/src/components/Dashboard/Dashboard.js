import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import { useState } from "react";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSideBar = () => {
    setSidebarOpen(true);
  };

  const closeSideBar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />
      <Main/> 
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />  
    </div>
  );
}

export default Dashboard;
