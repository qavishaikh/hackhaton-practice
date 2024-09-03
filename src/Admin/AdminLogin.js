import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get } from 'firebase/database'; // Import Realtime Database functions
import { auth, database } from '../Auth/firebase'; // Correct path to firebase.js
import '../Auth/Styles.css'; 

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch the user's role from the database
      const roleRef = ref(database, 'users/' + user.uid + '/role');
      const snapshot = await get(roleRef);

      if (snapshot.exists() && snapshot.val() === 'admin') {
        navigate('/admin-dashboard'); // Redirect to admin dashboard if the user is an admin
      } else {
        setError('Access denied: You are not an admin.');
        await auth.signOut(); // Sign out the user if they are not an admin
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleAdminLogin}>
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
        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
}

export default AdminLogin;
