// src/Admin/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Auth/firebase';
import { signOut } from 'firebase/auth';


function AdminDashboard() {
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
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
