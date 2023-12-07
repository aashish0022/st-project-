import React from 'react';
import "./Banner6.css";

function Banner6() {
  return (
    <div id='Gohiking'>
    <div className="ban6">
      <div className="head">
        <h5>CHECK OUT OUR ULTIMATE <br />
        GUIDE TO HIKING!</h5>
      </div>

      <div className="para">
        <p>
          A COMPLETE GUIDE TO SUSTAINABLE <br />
          AND ENVIRONMENTALLY SAFE HIKING.
        </p>
      </div>

      <div className="magazine">
        <img width={"450px"} height={"600px"} src={require("../Images/magazine ban6.png")} alt="Magazine" />
      </div>

      <div className="buttonban6">
        <button>
          GET THE GUIDE
        </button>
      </div>
    </div>
    </div>
  );
}

export default Banner6;
