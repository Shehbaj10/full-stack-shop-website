import React from 'react';
import { Link } from 'react-router-dom';
import './ShortcutPage.css';
import right from '../images/right.png'; 


function Shortcut() {
  return (
    <banner className="topbanner">
       <ul className="nav-item">
            <Link className="nav-link" to="/specials">Check out our specials
              <img src={right} alt="Arrow" />
            </Link> 
        </ul>
    </banner>
  );
}

export default Shortcut;
