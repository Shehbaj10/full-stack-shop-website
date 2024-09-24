import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './CartPage.css';

import apples from '../images/foodImage/ApplesImage.png';
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

const itemImages = {
  Apple: apples,
  Avocado: avacado,
  Blueberries: blueberries,
  Capsicum: capsicum,
  Eggplant: eggplant,
  Eggs6: eggs6,
  Eggs12: eggs12,
  'Full Cream Milk': fullCreamMilk,
  Lettuce: lettuce,
  'Low Fat Milk': lowFatMilk,
  'Oat Milk': oatMilk,
  Onions: onions,
  Potatoes: potatoes,
  Raspberries: raspberries,
  'Red Bell': redBell,
  Strawberries: strawberries,
  Tomatoes: tomatoes,
  Beef: beef,
  Chicken: chicken,
  BlackTea: blackTea,
  DecafCoffee: decafCoffee,
  GreenTea: greenTea,
  Lamb: lamb
};
function CartPage() {
  const history = useHistory();

  const [cartItems, setCartItems] = useState([]);

  // Effect hook to load cart items from localStorage
  useEffect(() => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Function to get image for a given item name
  const getImageForItem = (itemName) => {
    return itemImages[itemName] || 'path/to/default/image.jpg';
  };

    // Function to handle checkout
  const handleCheckout = () => {
    history.push('/checkout');
  };

    // Function to handle adding an item to the cart
  const handleAddItem = (itemName) => {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

    // Function to handle removing an item from the cart
  const handleRemoveItem = (itemName) => {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity -= 1;
        setCartItems(updatedCartItems);
      } else {

        const filteredCartItems = updatedCartItems.filter(item => item.name !== itemName);
        setCartItems(filteredCartItems);
      }
    }
  };

    // Function to handle emptying the cart
  const handleEmptyCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

    // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="final-cart-container">
      <style>
        {`
          body {
            background-image: linear-gradient(white, green);
            background-size: cover;
            background-position: center; 
          }
        `}
      </style>
      <h2>Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <ul className="final-cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="final-cart-item">
                <img src={getImageForItem(item.name)} alt={item.name} />
                <div className="final-item-details">
                  <div><strong>{item.name}</strong> - ${item.price} each</div>
                  <div>Quantity: {item.quantity}</div>
                  <div className="final-item-actions">
                    <button onClick={() => handleAddItem(item.name)}>+</button>
                    <button onClick={() => handleRemoveItem(item.name)}>-</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total: ${calculateTotalPrice()}</p>
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          <button className="empty-cart-button" onClick={handleEmptyCart}>Empty Cart</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;

export { itemImages };
