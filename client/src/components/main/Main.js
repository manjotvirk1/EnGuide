import React from "react";
import "./Main.css";
import top from "../../assets/top.svg";
// import Teacher from "../teacher/Teacher";
const Main = () => {
  return (
    <div className="main__container">
      <div className="main__title">
        <img src={top} alt="top" />
        <div className="main__greeting">
          {/* insert username from table */}

          <h1> Hello {localStorage.getItem("userType")}</h1>
          <p>Welcome to your Dashboard</p>
        </div>
      </div>

      {/* cards start from here */}

      <div className="main__cards">
        <div className="card">
          <i className="fa fa-user-o fa-2x text-lightblue"></i>
          <div className="card_inner">
            <p className="text-primary-p">Assignments pending</p>
            <span className="font-bold test-title">______</span>{" "}
            {/* backend se aaega yeh */}
          </div>
        </div>

        <div className="card">
          <i className="fa fa-calendar fa-2x text-red"></i>
          <div className="card_inner">
            <p className="text-primary-p">Deadlines</p>
            <span className="font-bold text-title">______</span>{" "}
            {/* backend se aaega yeh */}
          </div>
        </div>

        <div className="card">
          <i className="fa fa-thumbs-up fa-2x text-green"></i>
          <div className="card_inner">
            <p className="text-primary-p">Submitted</p>
            <span className="font-bold text-title">______</span>{" "}
            {/* backend se aaega yeh */}
          </div>
        </div>

        <div className="card">
          <i className="fa fa-video-camera fa-2x text-yellow"></i>
          <div className="card_inner">
            <p className="text-primary-p">Groups</p>
            <span className="font-bold test-title">______</span>{" "}
            {/* backend se aaega yeh */}
          </div>
        </div>
      </div>

      <div className="teachers">
        <div className="teachers__left">
          <div className="teachers__left__title">
            <h1>Your Teachers</h1>
          </div>
          <i className="fa fa-teacher"></i>
          {/* <Teacher /> */}
        </div>

        <div className="teachers__right">
          <div className="teachers__right__title">
            <h1>Attendance Report</h1>
          </div>
          <i className="fa fa-calendar"></i>

          <div className="teachers__right__cards">
            <div className="card1">
              <h1>ADS</h1>
              <p>92%</p>
            </div>

            <div className="card2">
              <h1>OOSE</h1>
              <p>87%</p>
            </div>

            <div className="card3">
              <h1>Full-Stack</h1>
              <p>100%</p>
            </div>

            <div className="card4">
              <h1>CC</h1>
              <p>92%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
