import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      {/* HEADER STARTED */}
      <div className="header">
        {/* START OF NAV BAR AND LOGO DIV */}
        <div className="navbar">
          {/* START OF LOGO DIV */}
          <div className="logo">
            <img src={require("../Images/logo.png")} alt="Logo" />
          </div>
          {/* END OF LOGO DIV */}

          {/* START OF MENU BAR DIV */}
          <div className="menu">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="About">ABOUT</Link>
              </li>
              <li>
                <RouterLink to="/contact">CONTACT US</RouterLink>
              </li>
              <li>
                <h5
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </h5>
              </li>
              <li>
                <h5
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </h5>
              </li>
            </ul>
          </div>

          {/* END OF MENU BAR DIV */}

          {/* DOT IMAGE DIV */}
          <div className="dot">
            <img src={require("../Images/dot.png")} alt="Dot" />
          </div>
          {/* DOT IMAGE DIV ENDED */}

          {/* SEARCH BAR IMAGE DIV */}
          {/* <div className="search">
            <img src={require("../Images/Button.png")} alt="Search" />
          </div> */}
          {/* SEARCH BAR DIV IMAGE ENDED */}
        </div>
        {/* END OF NAV BAR AND LOGO DIV */}

        <div className="enjoy">
          <div>ENJOY THE</div>
          <div>BEAUTY OF</div>
          <div>NATURE!</div>
          <p>
            LOREM IPSUM DOLOR
            <br />
            SIT AMET, ADIPISICING
            <br />
            ELIT. VENIAM, FACILIS.
          </p>
          <button>GET STARTED</button>
        </div>

        <div className="blue_waves">
          <img src={require("../Images/blue waves.png")} alt="Blue Waves" />
        </div>

        <div className="last_text">
          <h5>IT'S TIME TO START YOUR ADVENTURES</h5>
          <p>LOREM IPSUM DOLOR SIT AMET, ADIPISICING ELIT. VENIAM, FACILIS.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
