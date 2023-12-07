import React from 'react';
import './Banner5.css';

function Banner5() {
  return (
    
    <div className="ban5">
      <div className="div1">
        <center>
          <img width="250px" height="300px" src={require("../Images/jessica.png")} alt="Jessica"/>
        </center>

        <div className="coach1">
          <h5>JESSICA</h5>
        </div>

        <div className="coach1h">
          <h5>OWEN</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipisicing elit.<br />
          laudantium ullam fugit. Qui!
        </p>
      </div>

      <div className="div2">
        <center>
          <img width="250px" height="300px" src={require("../Images/robert.png")} alt="Robert" />
        </center>

        <div className="coach2">
          <h5>ROBERT</h5>
        </div>

        <div className="coach2h">
          <h5>DOE</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipisicing elit.<br />
          laudantium ullam fugit. Qui!
        </p>
      </div>

      <div className="div3">
        <center>
          <img width="250px" height="300px" src={require("../Images/john.png")} alt="John" />
        </center>

        <div className="coach3">
          <h5>JOHN</h5>
        </div>

        <div className="coach3h">
          <h5>BROWN</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipisicing elit.<br />
          laudantium ullam fugit. Qui!
        </p>
      </div>
    </div>
     
  );
}

export default Banner5;
