import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';
//import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
        {//<Route path="/admin" element={<AdminDashboard />} />
        }
      </Routes>
    </Router>
  );
}

export default App;
