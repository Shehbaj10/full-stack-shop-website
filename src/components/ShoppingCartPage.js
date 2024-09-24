import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ShoppingCartPage.css';
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

function ShoppingCartPage({ cartItems, setCartItems }) {
  const [quantity, setQuantity] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const productPrices = {
    Apple: 2,
    Avocado: 3,
    Blueberries: 5,
    Capsicum: 2.5,
    Eggplant: 2,
    Eggs6: 4,
    Eggs12: 7,
    'Full Cream Milk': 3.5,
    Lettuce: 2,
    'Low Fat Milk': 3,
    'Oat Milk': 4,
    Onions: 1.5,
    Potatoes: 2,
    Raspberries: 4.5,
    'Red Bell': 2.5,
    Strawberries: 5,
    Tomatoes: 1.8,
    Beef: 6,
    Chicken: 4,
    BlackTea: 3,
    DecafCoffee: 5,
    GreenTea: 3.5,
    Lamb: 8
  };

  useEffect(() => {
    // Check for stored cart items in local storage

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addItemToCart = (productName, quantityToAdd) => {
    console.log('Adding item to cart:', productName, quantityToAdd);
    const existingItemIndex = cartItems.findIndex(item => item.name === productName);
    let updatedCartItems = [];
  
    if (existingItemIndex >= 0) {

      const updatedItem = {
        ...cartItems[existingItemIndex],
        quantity: cartItems[existingItemIndex].quantity + quantityToAdd
      };
      updatedCartItems = [
        ...cartItems.slice(0, existingItemIndex),
        updatedItem,
        ...cartItems.slice(existingItemIndex + 1)
      ];
    } else {

      const newItem = { name: productName, price: productPrices[productName], quantity: quantityToAdd };
      updatedCartItems = [...cartItems, newItem];
    }
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    setCartItems(updatedCartItems);
    setQuantity({ ...quantity, [productName]: '' }); 
    setSuccessMessage(`Added ${quantityToAdd} ${productName}(s) to cart`);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };
  
  // Function to navigate to cart page

  const handleCheckCart = () => {
    history.push('/cart');
  };

  return (
   
    <div className="shopping-cart-container">
      <h1>Shopping Items</h1>
      <p>Shop our fresh produce from the nutrient rich fields of melboure nurtured with love and skill.</p>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <div className="cart-items">
        {Object.keys(productPrices).map((productName, index) => (
          <div className="cart-item" key={index}>
            <img src={getImage(productName)} alt={productName} />
            <div className="item-details">
              <h4>{productName}</h4>
              <p>Price: ${productPrices[productName]}</p>
              <div className="item-options">
                <input
                  type="number"
                  min="1"
                  value={quantity[productName] || ''}
                  onChange={(e) => setQuantity({ ...quantity, [productName]: e.target.value })}
                />
                <Button variant="primary" onClick={() => addItemToCart(productName, parseInt(quantity[productName] || 1))}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={handleCheckCart}>Check Cart</Button>
    </div>
  );
}

function getImage(productName) {
  switch (productName) {
    case 'Apple':
      return apples;
    case 'Avocado':
      return avacado;
    case 'Blueberries':
      return blueberries;
    case 'Capsicum':
      return capsicum;
    case 'Eggplant':
      return eggplant;
    case 'Eggs6':
      return eggs6;
    case 'Eggs12':
      return eggs12;
    case 'Full Cream Milk':
      return fullCreamMilk;
    case 'Lettuce':
      return lettuce;
    case 'Low Fat Milk':
      return lowFatMilk;
    case 'Oat Milk':
      return oatMilk;
    case 'Onions':
      return onions;
    case 'Potatoes':
      return potatoes;
    case 'Raspberries':
      return raspberries;
    case 'Red Bell':
      return redBell;
    case 'Strawberries':
      return strawberries;
    case 'Tomatoes':
      return tomatoes;
    case 'Beef':
      return beef;
    case 'Chicken':
      return chicken;
    case 'BlackTea':
      return blackTea;
    case 'DecafCoffee':
      return decafCoffee;
    case 'GreenTea':
      return greenTea;
    case 'Lamb':
      return lamb;
    default:
      return null;
  }
}

export default ShoppingCartPage;


