import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>SOIL Haven</h2>
          <p>Together we make our safe and green future for us and our community</p>
        </div>
        <div className="footer-section links">
          <h2>Go To</h2>
          <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Specials">Specials</Link></li>
            <li><Link to="/Seminars">Seminars</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us At</h2>
          <ul>
            <li>Email: SoilHavenSupport.com</li>
            <li>Phone: 1234567890</li>
            <li>Address: 666 Rock St, Clayton VIC, Australia</li>
          </ul>
        </div>
        <div className="footer-section acknowledgment">
          <p>
          SoilHaven acknowledges the Australian Aboriginal and Torres Strait Islander peoples of this nation. We acknowledge the traditional custodians of the lands on which our company is located and where we conduct our business. We pay our respects to ancestors and Elders, past and present. SoilHaven is committed to honouring Australian Aboriginal and Torres Strait Islander peoples unique cultural and spiritual relationships to the land, waters and seas and their rich contribution to society.

          </p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
