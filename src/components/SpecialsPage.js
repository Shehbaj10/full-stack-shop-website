import React, { useState, useEffect , Card} from 'react';
import apples from '../images/foodImage/ApplesImage.png';
import avacado from '../images/foodImage/AvacadosImage.png';
import blueberries from '../images/foodImage/BlueberriesImage.png';
import raspberries from '../images/foodImage/RasberryImage.png';
import strawberries from '../images/foodImage/strawberryImage.png';
import './SpecialsPage.css'; 
import { useHistory } from "react-router-dom";


function SpecialsPage() {
  const history = useHistory();
  const fruitSpecials = [
    { name: 'Apple', image: apples, price: 2 },
    { name: 'Avocado', image: avacado, price: 3 },
    { name: 'Blueberries', image: blueberries, price: 5 },
    { name: 'Raspberries', image: raspberries, price: 4 },
    { name: 'Strawberries', image: strawberries, price: 3 },
  ];

  function sendToShop() {
    history.push("/redirectToShop");
  }

  return (
    <div className="specials-container">
      <style>
        {`
          body {
            background-image: linear-gradient(white, green);
            background-size: cover;
            background-position: center; 
          }
        `}
      </style>
      <h1>Here are some Specials for this Week</h1>
      <p>Save money on discounted products</p>
      <div className="specials-items">
        {/* Map through specials and render each item */}
        
        {fruitSpecials.map((special, index) => (
          <div onClick={sendToShop} className="specials-item" key={index}>
            <img src={special.image} alt={special.name} />
            <div className="item-details">
              <h4>{special.name}</h4>
              <p>Price: ${special.price}</p>
            </div>
          </div>
        ))}
        
      </div>      
    </div>
  );
}

export default SpecialsPage;
