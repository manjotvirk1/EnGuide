import React from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./home.css";

function Home() {
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
      <div className="home">
        <div className="carde1">
          <div class="content text-center">
            <h1>A New Way to Learn</h1>
            <p>
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <a
              class="btn sign-up-btn hover-panel round"
              href="/accounts/signup/"
            >
              Create Account &nbsp;
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="carde2">
          <div class="content text-center">
            <h1>A New Way to Learn</h1>
            <p>
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <a
              class="btn sign-up-btn hover-panel round"
              href="/accounts/signup/"
            >
              Create Account &nbsp;
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="carde3">
          <div class="content text-center">
            <h1>A New Way to Learn</h1>
            <p>
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <a
              class="btn sign-up-btn hover-panel round"
              href="/accounts/signup/"
            >
              Create Account &nbsp;
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
    </div>
  );
}

export default Home;
