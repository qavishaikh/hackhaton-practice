// src/Admin/AdminSignup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database'; // Import Realtime Database functions
import { auth, database } from '../Auth/firebase'; // Correct path to firebase.js
import '../Auth/Styles.css'; 

function AdminSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Use Realtime Database reference functions
      await set(ref(database, 'users/' + user.uid), {
        email: user.email,
        password: password,
        role: 'admin', // Set role to 'admin'
      });

      alert('Admin registered successfully!');
      navigate('/admin-dashboard'); // Redirect to admin dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Admin Signup</h2>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleAdminSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup as Admin</button>
      </form>
    </div>
  );
}

export default AdminSignup;
