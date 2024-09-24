import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileImage from "../images/image.jpeg"; 
import "./RedirectToShopPage.css";

function RedirectToShopPage() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/shop");
  }, 3000);

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
            <div className = "banner-details8">
              <h1 className="text">Redirecting...</h1>
              <h2 className="text">Select your special deals in the shop</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RedirectToShopPage;
