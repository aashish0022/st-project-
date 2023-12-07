import React from 'react';
import './Banner2.css';

const Banner2 = () => {
  return (
    <div id='About'>
    <div className="ban2">
      <div className="mountain">
        <center><img src={require("../Images/mountains.png")} alt="Mountains" /></center>
        <h3>IN EVERY CONDITIONS</h3>
        <p>Lorem ipsum dolor sit <br />
          amet, consectetur<br />
          adipisicing elit. Dolorem<br />
          harum aspernatur<br />
          sapiente error, voluptas<br />
          fuga, laudantium ullam<br />
          magni fugit. Qui!
        </p>
      </div>

      <div className="compass">
        <center><img src={require("../Images/compass.png")} alt="Compass" /></center>
        <h3>PROFESSIONAL TEAM</h3>
        <p>Lorem ipsum dolor sit <br />
          amet, consectetur<br />
          adipisicing elit. Dolorem<br />
          harum aspernatur<br />
          sapiente error, voluptas<br />
          fuga, laudantium ullam<br />
          magni fugit. Qui!
        </p>
      </div>

      <div className="bag">
        <center><img src={require("../Images/bag.png")} alt="Bag" /></center>
        <h3>EXPERT HIKERS</h3>
        <p>Lorem ipsum dolor sit <br />
          amet, consectetur<br />
          adipisicing elit. Dolorem<br />
          harum aspernatur<br />
          sapiente error, voluptas<br />
          fuga, laudantium ullam<br />
          magni fugit. Qui!
        </p>
      </div>
    </div>
    </div>
  );
};

export default Banner2;
