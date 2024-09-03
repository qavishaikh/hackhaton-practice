// src/User/UserDashboard.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Auth/firebase';
import UserNavbar from './UserNavbar'; 
import './UserDashboard.css'; 


function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      alert('Error signing out: ' + error.message); // Handle any errors
    }
  };

  return (
    <div>
    <UserNavbar /> {/* Render the UserNavbar here */}
    <div className="dashboard-content">
      <h2>User Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  </div>
  );
}

export default UserDashboard;
