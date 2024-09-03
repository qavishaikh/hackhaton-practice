import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Auth/Signup';
import AdminSignup from './Admin/AdminSignup';
import Login from './Auth/Login';
import AdminDashboard from './Admin/AdminDashboard';
import UserDashboard from './User/UserDashboard';
import Home from './Home'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
