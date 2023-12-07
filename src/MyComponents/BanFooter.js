import React from 'react';
import "./BanFooter.css";

function BanFooter() {
  return (
    
    <div className="ban7">
      {/* BANNER 7 */}
      <div className="ban7_head">
        <h5>SUBSCRIBE TO THE MONTHLY EDITION OF THE HIKING CLUB</h5>
        <p>LOREM IPSUM DOLOR SIT AMET, ADIPISICING ELIT. VENIAM, FACILIS.</p>
      </div>

      <div className="buttondiv">
        <input type="chat" className="yourname" name="yourname" placeholder="Your Name" /><br /><br /><br />
        <input type="chat" className="youremail" name="youremail" placeholder="Your Email" />
      </div>

      <div className="rightdot">
        <img src={require("../Images/ban7 halfdot.png")} alt="Dot" />
      </div>

      <div className="ban7wave">
        <img src={require("../Images/ban7 blue waves.png")} alt="Blue Waves" />
      </div>

      <div className="subbutton">
        <button>
          SUBSCRIBE
        </button>
      </div>
      {/* BANNER 7 ENDED */}
      
      {/* FOOTER */}
      <div id='Contactus'>
      <footer>
      <div className="info1">
          <h5>NEVER STOP HIKING.<br /> TAKE A HIKE TODAY!</h5>
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Dolorem harum aspernatur<br /> laudantium ullam magni fugit<br /> laudantium. Qui!</p>
        </div>

        <div className="info2">
          <h3>EXPLORE</h3>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">GO HIKING</a></li>
            <li><a href="#">OUR COACHES</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
          {/* <center><p>DESIGNED BY: DIYA SISHODIA</p></center> */}
        </div>

        <div className="info3">
          <h4>CONTACT US</h4>
          <p>ANYWHERE ST., ANY CITY, ST12345<br /> +123-456-7890<br /> HELLO@HIKINGCLUB.COM<br /> WWW.HIKINGCLUB.COM</p>
          <div className="icon">
            <img width={"165"} height={"30"} src={require("../Images/icons.png")} alt="Icons" />
          </div>
        </div>
      </footer>
      </div>
      {/* FOOTER ENDED */}
    </div>
    
  );
}

export default BanFooter;
