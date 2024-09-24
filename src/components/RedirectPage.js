import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileImage from "../images/image.jpeg"; 
import "./RedirectPage.css";

//Redirects to login page after 3 seconds

function RedirectPage() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/login");
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
              <h1 className="text">Please Login First!</h1>
              <h2 className="text">To access this content please login or sign up</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RedirectPage;
