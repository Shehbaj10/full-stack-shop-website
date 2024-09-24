// importing component
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shortcut from './components/ShortcutPage';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import ShopPage from './components/ShopPage';
import SessionsPage from './components/SessionsPage';
import SpecialsPage from './components/SpecialsPage';
import MealPlanPage from './components/MealPlanPage'; 
import CartPage from './components/CartPage'; 
import CheckoutPage from './components/CheckoutPage'; 
import Footer from './components/Footer';
import SummaryPage from './components/SummaryPage';
import BookingPage from './components/BookingPage';
import RedirectPage from './components/RedirectPage';
import RedirectToShopPage from './components/RedirectToShopPage';
function App() { 

  if(JSON.parse(localStorage.getItem("userData")) === null){
  const admin = [
    {
      name: "dev",
      email: "dev@gmail.com",
      password: "abc123A!",
      phone: "1234567890",
      joinDate:"01/01/24"
    },
    {
      name: "bishr",
      email: "bishr@gmail.com",
      password: "def456D$",
      phone: "0987654321",
      joinDate:"01/01/24"
    }
  ];
  localStorage.setItem("userData", JSON.stringify(admin)); 
}
else{
  localStorage.removeItem("userData");
  const admin = [
    {
      name: "dev",
      email: "dev@gmail.com",
      password: "abc123A!",
      phone: "1234567890",
      joinDate:"01/01/24"
    },
    {
      name: "bishr",
      email: "bishr@gmail.com",
      password: "def456D$",
      phone: "0987654321",
      joinDate:"01/01/24"
    }
  ];
  localStorage.setItem("userData", JSON.stringify(admin)); 
}
  return (
    <>
      <Router>
        {/* Render the  component */}
        <Shortcut />
        <NavBar />
        
        <div className="container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/shop">
              <ShopPage />
            </Route>
            <Route exact path="/cart"> 
              <CartPage />
            </Route>
            <Route exact path="/specials">
              <SpecialsPage />
            </Route>
            <Route exact path="/sessions">
              <SessionsPage />
            </Route>
            <Route exact path="/mealplan">
              <MealPlanPage />
            </Route>
            <Route exact path="/checkout">
              <CheckoutPage />
            </Route>
            <Route exact path="/summary">
              <SummaryPage />
            </Route>
            <Route exact path="/booking">
              <BookingPage />
            </Route>
            <Route exact path="/redirect">
              <RedirectPage />
            </Route>
            <Route exact path="/redirectToShop">
              <RedirectToShopPage />
            </Route>
            
          
          </Switch>
        </div>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
