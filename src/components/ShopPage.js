import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ShoppingCart from './ShoppingCartPage';

function ShopPage() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);

  const isLoggedIn = localStorage.getItem('userData');
  if (!isLoggedIn) {
    history.push('/redirect');
    return null;
  }
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
      <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default ShopPage;
