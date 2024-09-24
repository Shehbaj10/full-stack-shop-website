import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./RegistrationPage.css"; 

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const history = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();

    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!strongRegex.test(password)) {
      setFlag("weakPassword");
      return;
    }
        // Check if any fields are empty

    if (!name || !email || !password || !phone) {
      setFlag("emptyFields");
      return;
    }

    setFlag(false);
    const userData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      joinDate: new Date().toISOString() 
    };
        // Store user data in local storage
    
        if (JSON.parse(localStorage.getItem("userData")) && userData){
          var allEntries = JSON.parse(localStorage.getItem("userData"));
          allEntries.push(userData);
          localStorage.setItem("userData", JSON.stringify(allEntries));
        }
    

    setRegistrationSuccess(true);
    setTimeout(() => {
      history.push("/login");
    }, 2000);
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
      <div className="container dark-container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h3 className="card-title text-center mb-4 text-white">Register</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white">Phone No.</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter contact no"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                      Register
                    </button>
                  </div>
                  
                  {flag === "emptyFields" && (
                    <Alert color="primary" variant="danger" className="mt-3">
                      All fields are required!
                    </Alert>
                  )}
                  {flag === "weakPassword" && (
                    <Alert color="primary" variant="danger" className="mt-3">
                      Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </Alert>
                  )}
                  {registrationSuccess && (
                    <Alert color="success" variant="success" className="mt-3">
                      Registration successful! Redirecting to home page...
                    </Alert>
                  )}

                  <p className="text-white text-center mt-3">
                    Already a member? <a href="/login">Sign in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
