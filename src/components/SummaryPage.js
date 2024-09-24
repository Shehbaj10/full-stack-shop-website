import React from 'react';
import { useLocation } from 'react-router-dom';
import { itemImages } from './CartPage';  // Importing itemImages from cart.js
import avacado from '../images/foodImage/AvacadosImage.png';
import blueberries from '../images/foodImage/BlueberriesImage.png';
import capsicum from '../images/foodImage/CapsicumImage.png';
import eggplant from '../images/foodImage/EggplantImage.png';
import eggs6 from '../images/foodImage/HalfDozenImage.png';
import eggs12 from '../images/foodImage/DozenImage.png';
import fullCreamMilk from '../images/foodImage/FullCreamImage.png';
import lettuce from '../images/foodImage/LettuceImage.png';
import lowFatMilk from '../images/foodImage/LowFatImage.png';
import oatMilk from '../images/foodImage/OatMilkImage.png';
import onions from '../images/foodImage/OnionsImage.png';
import potatoes from '../images/foodImage/PotatoImage.png';
import raspberries from '../images/foodImage/RasberryImage.png';
import redBell from '../images/foodImage/RedbellPepperImage.png';
import strawberries from '../images/foodImage/strawberryImage.png';
import tomatoes from '../images/foodImage/tomatesImage.png';
import beef from '../images/foodImage/BeefImage.png';
import chicken from '../images/foodImage/ChickenImage.png';
import blackTea from '../images/foodImage/BlackteaImage.png';
import decafCoffee from '../images/foodImage/DecafImage.png';
import greenTea from '../images/foodImage/GreenTeaImage.png';
import lamb from '../images/foodImage/LambImage.png';


function SummaryPage() {
  const location = useLocation();
  const { cartItems } = location.state;

  const getImageForItem = (itemName) => {
// Returning image for the item
    return itemImages[itemName] || 'path/to/default/image.jpg'; 
  };

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
      <h2>Summary</h2>
      <p>Thank You for Shopping</p>
      <h3>Purchased Items:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={getImageForItem(item.name)} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SummaryPage;