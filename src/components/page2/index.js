import React from "react";
import "./page2.css";
// import { Link } from "react-router-dom";
import Left_data_images from "./image.jpg";

const index = () => {
  // there have two array and each array have multiple object ( in the form of key and value pair ). With the help of those array we fetch the data using ( map ) method 
  let card_data = [
    {
      heading: "project update",
      description:
        " The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing.",
    },
    {
      heading: "Challenges",
      description:
        "The team has encountered several challenges during the development process, including unexpected system crashes, hardware malfunctions, and unanticipated compatibility issues...The team has encountered several challenges during the development process, including unexpected system crashes, hardware malfunctions, and unanticipated compatibility issues.",
    },
    {
      heading: "NEXT STEPS",
      description:
        "The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing.",
    },
    {
      heading: "CONCLUSION",
      description:
        "Despite the challenges encountered, the team remains optimistic about the potential of the project. The development of advanced neural interfaces and machine learning algorithms .",
    },
  ];
  let log_updates_data = [
    {
      log_entry_heading: "PROJECT DEVELOPMENT UPDATE",
      date: "2007.04.25",
    },
    {
      log_entry_heading: "new project started",
      date: "2007.04.25",
    },
    {
      log_entry_heading: "release story",
      date: "2007.04.25",
    },
  ];
  
  return (
    <section className="body">
      <div className="gradient_color"></div>
      {/* Top Navbar */}
      <section className="Top_section">
        <nav className="Top_navbar">
          <div className="Left_nav_element">
            <div id="Level_count">
              <label className="left_num pd-LR-20">48</label>
              <label className="left_title light-color">Level</label>
            </div>
            <div className="Coin_awarded_count">
              <div className=" align-center">
                <button className="Coin_awarded_add_button light-color">
                  +
                </button>
                <label className="left_num pd-LR-20">1,425</label>
              </div>
              <div className="button_label">
                <label className="left_title light-color">coins awarded</label>
              </div>
            </div>
          </div>
          <div className="Right_nav_element">
            <label className="credits light-color">credits</label>
            <div className="server_time">
              <label className="right_title">coins awarded: </label>
              <label className="right_num light-color">42</label>
            </div>
            <div className="local_time">
              <label className="right_title">local time: </label>
              <label className="right_num light-color">15:42</label>
            </div>
          </div>
        </nav>
      </section>

      {/* Body Content */}
      <section className="container">
        <main className="main_container">
          {/* left sided content here */}
          <div className="left_data">
            <div className="center">
              <div className="left_data_images">
                <img
                  src={Left_data_images}
                  alt="image.png"
                  height={"175px"}
                  width={"194px"}
                />
              </div>
              <div className="left_data_labels">
                <span className="title">Name</span>
                <p className="values">Luz Wintheiser</p>
              </div>
              <div className="left_data_labels">
                <span className="title">occupation</span>
                <p className="values">Web Development</p>
              </div>
              <div className="left_data_labels">
                <span className="title">corporation</span>
                <p className="values">Legacy.ai</p>
              </div>
              <div className="left_data_labels">
                <span className="title">availability</span>
                <button className="open_for_hire">
                  <div className="open_for_hire_data">
                    <label className="values">open for hire</label>
                    <img src="" alt="(^.^)" />
                  </div>
                </button>
              </div>
              <div className="left_data_labels social-data">
                <span className="title">social</span>
                <button className="open_connection">
                  <label className="values">open connection</label>
                </button>
              </div>
            </div>
            <div className="bottom_caption">
              <span className="title">motto:</span>
              <p className="description">
                Saepe omnis neque numquam recusandae laudantium.
              </p>
            </div>
          </div>

          {/* middle content here */}
          <div className="middle_data">
            <div className="half-width">
              <p className="middle_top_heading">data log dump initialized.</p>

              <div className="development_update">
                <div className="update_heading">
                  <h3>LOG ENTRY: PROJECT DEVELOPMENT UPDATE</h3>
                  <p className="paragraph">DATE: 2007.04.25</p>
                </div>
                <p className="text">
                  LOCATION : <span>Research Facility, Planet X-17</span>
                </p>
                <p className="text">
                  PROJECT STATUS : <span>In Development</span>
                </p>
              </div>

              <div className="card_box">
                {card_data.map((values) => {
                  return (
                    <div className="card-data">
                      <h3>{values.heading}</h3>
                      <p>
                        {values.description
                          ? values.description.slice(0, 100) + " ..."
                          : "Description Not Given."}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button className="preview_visual_records">
                <span>preview visual records</span>
              </button>

              <div className="order_logs">
                <p>Order Logs: </p>
                {log_updates_data.map((entities) => {
                  return (
                    <div className="log-entry">
                      <h3>Log Entry: {entities.log_entry_heading}</h3>
                      <p>Date: {entities.date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right sided content here */}
          <div className="right_data">
            {/* left sky color border */}
            <div className="left_border_div">
              {/* design like a flag */}
              <div className="flag_design">
                <button className="Active_Quest">
                  <label>Active Quest</label>
                  <img src="" alt="1" />
                </button>

                <div className="flag_down_item">
                  <p>the react skill-up line</p>
                </div>
              </div>

              {/* details */}
              <div className="Quest_name">
                <h3>Quest Name</h3>
                <span>React Website</span>
              </div>

              {/* goal */}
              <div className="goal">
                <h3>Goal</h3>
                <p>
                  Build this website. Implement a full react website with
                  multiple routers, UI elements and tricky styling. Make it all
                  work great!
                </p>
              </div>

              {/* rewards */}
              <div className="rewards">
                <h3>rewards</h3>
                <div className="rewards_logos">
                  <div className="logo">
                    <img src="" alt="1" />
                    <label>+5</label>
                  </div>
                  <div className="logo">
                    <img src="" alt="2" />
                    <label>+25</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
};

export default index;
