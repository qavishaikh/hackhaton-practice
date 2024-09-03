// src/Auth/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database'; // Import Realtime Database functions
import { auth, database } from './firebase';
import './Styles.css'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Use Realtime Database reference functions
      await set(ref(database, 'users/' + user.uid), {
        email: user.email,
        password: password,
        role: 'user', // Set role to 'user'
      });

      alert('User registered successfully!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
