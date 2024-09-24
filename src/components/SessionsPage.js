import React, { useState, useEffect } from 'react';
import { useHistory , Link} from "react-router-dom";
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import './SessionsPage.css';
import fridge from '../images/fridge.png';
import fooditems from '../images/fooditems.png';
import dishes from '../images/dishes.png';
import List from '../images/List.png';

function SessionsPage() {
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  const seminarSpecials = [
    { name: "Understanding Fundamentels of personal home agriculture" , image: s1, price: 25, venue: '666 Elizabeth Street, Melbourne' },
    { name: 'Grow your own healthy produce', image: s2, price: 30, venue: '999 rockfield st, burwood, Melbourn' },
    { name: "How to make a healthy diet and environment", image: s3, price: 50, venue: 'Online' },
  ];

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {

      history.push("/redirect");
    }
  }, [history]);


  return (
    <div className="seminars-container">
      <style>
        {`
          body {
            background-image: linear-gradient(white, green);
            background-size: cover;
            background-position: center; 
          }
        `}
      </style>
      <h1>Current Sessions</h1>
      <p>Attend these sessions to join a healthy community and increase you knowledge and skills </p>
      <div className="seminars-items">
        {seminarSpecials.map((seminar, index) => ( 
          <div className='seminars-item' key={index}>
            <img src={seminar.image} alt={seminar.name} />
            <div className="item-details">
              <h4>{seminar.name}</h4>
              <p>Price: ${seminar.price}</p>
              <p>Location: {seminar.venue}</p> 
              <Link className="button" to ="./booking">Book Now</Link>
            </div>
          </div>
        ))}
      </div>      
    <div className="vegetable-tips-container">
        <div className = 'heading-container'>
            <h1>Four easy steps to better meal planning with examples
            </h1>
            <h2>Learn how to manage your own health effectively!</h2>
        </div>
        <div className="info-container">
        <ul>
        <li>
            <h3>1. Look through the panty and refrigerator and jot down what’s on hand.</h3>
            <p>In the pantry, we've got a variety of staples like pasta, rice, canned beans, and spices galore. Meanwhile, the fridge is stocked with fresh veggies, eggs, cheese, yogurt, and some leftovers. There's also a jug of milk, a few different sauces, and some fruit waiting to be devoured.</p>
            <img src={fridge} alt="Picking the right spot" class="inline-image" />
          </li>

            <li>
            <h3>2. Plan meals based on number 1.</h3>
            <p>Based on pantry and fridge contents, meals planned include Pasta Primavera, Veggie Fried Rice, Bean and Cheese Quesadillas, Omelette with salad, Homemade Pizza, Yogurt Parfait, and Rice and Bean Burrito Bowl. Maximizing ingredients ensures varied and nutritious meals throughout the week, minimizing waste and maximizing flavor.</p>
            <img src={fooditems} alt="Picking the right spot" class="inline-image" />

            </li>

            <li>
            <h3>3. Fill in the rest of the menu planner with other favorite dishes.</h3>
            <p>Expanding the menu planner with beloved dishes like Grilled Chicken Caesar Salad, Vegetable Stir-Fry with Tofu, Beef Tacos with Homemade Guacamole, Quinoa Salad with Roasted Vegetables, Spaghetti Bolognese, Baked Salmon with Garlic Butter, and comforting Lentil Soup with Crusty Bread ensures a flavorful rotation, catering to diverse tastes and preferences.</p>
            <img src={dishes} alt="Picking the right spot" class="inline-image" />

            </li>
            <li>
            <h3>4. Make a shopping list of missing ingredients.</h3>
            <p>The shopping list comprises fresh produce such as lettuce, tomatoes, bell peppers, onions, garlic, and cilantro. Additionally, it includes protein sources like chicken, tofu, ground beef, and salmon. Pantry staples such as quinoa, lentils, spaghetti, and bread are needed, along with any specific spices or sauces required for the planned dishes.</p>
            <img src={List} alt="Picking the right spot" class="inline-image" />

            </li>
        </ul>
        </div>
        <div className = 'heading-container'>
        <h2>Good Luck planning! </h2>
        </div>

    </div>
  </div>

  );
}

export default SessionsPage;


