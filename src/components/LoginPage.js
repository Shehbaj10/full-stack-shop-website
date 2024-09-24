import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom"; 
import './LoginPage.css';

function LoginPage() {
  const var9 = JSON.parse(localStorage.getItem("userData"));
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();
    var count = 0;
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      var i ;
      for(i=0; i < userData.length; i++){
        if (emaillog === userData[i].email && passwordlog === userData[i].password) {
        history.push("/profile");
        const user = {
          name: userData[i].name,
          email: userData[i].email,
          password: userData[i].password,
          phone: userData[i].phone,
          joinDate: userData[i].joinDate
        };
        localStorage.setItem("user", JSON.stringify(user));
        return;
      }
      else {
        count++;
      }
    }
    if (count === userData.length) {
      setFlag(true);
    }
    else{
      return;
    }
    }
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
      <div className="container1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Log In </h3>
                <Form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className="text-black">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={emaillog}
                      onChange={(event) => setEmaillog(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-black">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={passwordlog}
                      onChange={(event) => setPasswordlog(event.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <Button variant="dark" type="submit" className="btn-lg btn-block">
                      Login
                    </Button>
                  </div>

                  {flag && (
                    <Alert variant="danger" className="mt-3">
                      Incorrect email or password. Please try again.
                    </Alert>
                  )}
                </Form>
              </div>

              <div className="card-footer">
                <p className="text-white mb-0">Not a member? <Link to="/register">Join now</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
