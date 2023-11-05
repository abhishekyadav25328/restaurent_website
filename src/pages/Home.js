import React from "react";
import Layout from "../component/Layout";
import {Link} from "react-router-dom";
// import Banner from "../images/Banner.jpg";
import "../style/HomeStyle.css";
import Paneer from "../Video/Paneer.mp4";

const Home = () => {
  return (
    <Layout>
      <div className="home" >
        <video src={Paneer} autoPlay loop muted style={{width: '100%'}} />

        <div className="headerContaner">
          <h1 className="heding">Food Website</h1>
          <p className="paira">Best Food In India</p>
          <Link to="/menu">
            <button className="button">ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
