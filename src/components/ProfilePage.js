import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {

      history.push("/redirect");
    }
  }, [history]);

  const handleEdit = () => {
    setEditMode(true);
    setEditData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      joinDate: userData.joinDate,
      password: userData.password 
    });
    setSuccessMessage("");
  };
  // function to delete user data in local storage
  const handleDelete = () => {
    if(JSON.parse(localStorage.getItem("userData")) && JSON.parse(localStorage.getItem("user"))){
    var allEntries = JSON.parse(localStorage.getItem("userData"));
    var userEntries = JSON.parse(localStorage.getItem("user"));
    var i;
    for(i=0; i < allEntries.length; i++){
      if(allEntries[i] === userEntries){
        allEntries.pop(allEntries[i]);
        return;
      }
    }
    localStorage.setItem("userData", JSON.stringify(allEntries));
    localStorage.removeItem("user");

    setUserData(null);

    setSuccessMessage("User deleted successfully.");

    setTimeout(() => {
      history.push("/login");
    }, 2000);
  }
  };
  // function to save user data in local storage
  const handleSaveEdit = () => {
    setUserData(editData);
    var allEntries = JSON.parse(localStorage.getItem("userData"));
    allEntries.push(editData);
    localStorage.setItem("userData", JSON.stringify(allEntries));

    setEditMode(false);
    setSuccessMessage("Profile updated successfully.");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

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
      <div className="container-profile">
        <h2 className="mt-4"></h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {userData ? (
          <div className="profile">
            {editMode ? (
              <div>
                <form onSubmit={handleSaveEdit}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" value={editData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email" value={editData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" className="form-control" name="phone" value={editData.phone} onChange={handleChange} />
                  </div>
                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary mr-2">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Date of Joining:</strong> {new Date(userData.joinDate).toLocaleString()}</p>
                <div className="btn-group">
                  <button className="btn btn-primary mr-2" onClick={handleEdit}>Edit</button>
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            )}
            <button className="btn btn-warning mt-3" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="alert alert-warning">Please log in.</div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
