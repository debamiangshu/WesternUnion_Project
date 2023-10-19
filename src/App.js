import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';



const App = () => (
  <Router>
    <Routes>
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  </Router>
);


export default App;

//Installed react-router-dom