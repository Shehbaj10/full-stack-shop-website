import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return ( 
    <div>
      <style>
        {`
          body {
            background-image: linear-gradient(white, green);
            background-size: cover;
            background-position: center; 
          }
        `}
      </style>
      <div className="banner1">
        <div className ="container-xx1">
          <div className="row">
            <div className = "banner-details">
              <h1 className="text1">Straight from Fresh produce in Melbourne</h1>
              <h2>Enjoy the premium quality products here at SoilHaven</h2>
              <Link className="button" to ="./Shop">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner3">
        <div className ="container-xx3">
          <div className="row">
            <div className = "banner-details">
              <h1 className="text1">Get your own recommendations today</h1>
              <h2>Changing lifestyle based on personalized diet suggestions can make a huge change</h2>
              <Link className="button" to ="./mealplan">Create Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner4">
        <div className ="container-xx4">
          <div className="row">
            <div className = "banner-details">
              <h1 className="text1">Join sessions based on your intrest</h1>
              <h2>Oppurtunity to contribute and learn from our community and become a part of it</h2>
              <Link className="button" to ="./Seminars">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
