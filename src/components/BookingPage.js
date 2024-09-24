import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './BookingPage.css';
import profileImage from "../images/abouta.png"; 


function BookingPage() {
  const history = useHistory();

  const isLoggedIn = localStorage.getItem('userData');
  if (!isLoggedIn) {
    history.push('/login');
    return null;
  }

  setTimeout(() => {
    history.push("/");
  }, 6000);

  return (
    <div>
        <style>
        {`
          body {
            background-image: url(${profileImage});
            background-size: cover;
            background-position: center; 
          }
        `}
      </style>
      <div>
      <div className="banner">
        <div className ="container">
          <div className="row">
            <div className = "banner-details">
              <h1 className="text1 text-color= grey">Your Booking has been Confirmed</h1>
              <h2 className="text-color= grey">Thank You! now you are being redirected to Home Page</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default BookingPage;
