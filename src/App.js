// import logo from './logo.svg';
import "./App.css";
// import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./MyComponents/Header";
import Banner2 from "./MyComponents/Banner2";
import Banner3 from "./MyComponents/Banner3";
import Banner4 from "./MyComponents/Banner4";
import Banner5 from "./MyComponents/Banner5";
import Banner6 from "./MyComponents/Banner6";
import BanFooter from "./MyComponents/BanFooter";

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Banner2 />
      </div>

      <div>
        <Banner3 />
      </div>

      <div>
        <Banner4 />
      </div>

      <div>
        <Banner5 />
      </div>

      <div>
        <Banner6 />
      </div>

      <div>
        <BanFooter />
      </div>
    </div>
  );
}

export default App;
