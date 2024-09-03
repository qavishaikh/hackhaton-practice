// src/User/UserDashboard.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Auth/firebase';


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
      <h2>User Dashboard</h2>
      <p>Welcome, User!</p>
      <button onClick={handleLogout}>Logout</button>
     
    </div>
  );
}

export default UserDashboard;
