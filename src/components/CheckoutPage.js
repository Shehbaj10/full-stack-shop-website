import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './CheckoutPage.css';

function CheckoutPage() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardError, setCreditCardError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [purchaseSuccess, setPurchaseSuccess] = useState(false); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      setTimeout(() => {

        history.push("/redirect");
      }, 2000);

    }
  }, [history]);

  useEffect(() => {
    // Load cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += Number(item.price) * Number(item.quantity);
    });
    return totalPrice.toFixed(2); 
  };

  const validateCreditCard = (number) => {
    return /^\d{16}$/.test(number); 
  };

  const validateExpiryDate = (date) => {
    return /^\d{2}\/\d{2}$/.test(date); 
  };

    // Function to handle payment process
  const handlePayment = () => {
    if (!validateCreditCard(creditCardNumber)) {
      setCreditCardError('Invalid credit card number');
      return;
    }

    if (!validateExpiryDate(expiryDate)) {
      setExpiryError('Invalid expiry date');
      return;
    }

    // Clear cart items from localStorage
    localStorage.removeItem('cartItems'); 
    setPurchaseSuccess(true); 
  
    // Redirect to summary page after 3 seconds
    setTimeout(() => {
      history.push({
        pathname: '/summary',
        state: { cartItems } 
      });
    }, 3000); 
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {purchaseSuccess && <p style={{ color: 'green' }}>Purchase successful! Redirecting to summary page...</p>} 
      <div>
        <h3>Items in Cart:</h3>
        <ul>
          {Array.isArray(cartItems) && cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
          ))}
        </ul>
      </div>
      <h3>Total Price: ${calculateTotalPrice()}</h3>
      <div>
        <label htmlFor="creditCard">Credit Card Number:</label>
        <input type="text" id="creditCard" value={creditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)} />
        {creditCardError && <p style={{ color: 'red' }}>{creditCardError}</p>}
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        {expiryError && <p style={{ color: 'red' }}>{expiryError}</p>}
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default CheckoutPage;
