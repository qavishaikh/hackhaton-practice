// src/Admin/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Auth/firebase';
import { signOut } from 'firebase/auth';
import Sidebar from './Sidebar'; // Import the Sidebar component

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
    <div style={{ display: 'flex' }}>
      <Sidebar handleLogout={handleLogout} /> {/* Render the Sidebar here */}
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
