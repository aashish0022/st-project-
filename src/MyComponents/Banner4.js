import React from 'react';
import "./Banner4.css";

function Banner4() {
  return (
    <div className="ban4">
      <h5>TAKE A WALK TO THE WILD SIDE</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
        Sed do eiusmod tempor incididunt ut labore et dolore<br />
        magna aliqua, ut enim ad minim veniam quis.
      </p>
      <h6>Edward Owens</h6>

      <center>
        <div className="small_dot">
          <img width={"15px"} height={"10px"} src={require("../Images/dot1.png")} alt="Dot 1" />
          <img width={"15px"} height={"10px"} src={require("../Images/Dot 2.png")} alt="Dot 2" />
          <img width={"15px"} height={"10px"} src={require("../Images/Dot 3.png")} alt="Dot 3" />
        </div>
      </center>

      <div className="bg_full_dot" >
        <img src={require("../Images/full dot.png")} alt="Full Dot" width={"200px"} height={"200px"}/>
      </div>

      <div className="text">
        <h5>OUR WONDERFUL TEAM</h5>
        <p>LOREM IPSUM DOLOR SIT AMET, ADIPISICING ELIT. VENIAM, FACILIS.</p>
      </div>
    </div>
  );
}

export default Banner4;
