import React, { useState } from 'react';

import "./ChangePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

 

  const handleChangePassword = () => {
    // Add logic to handle password change here
    if (newPassword === confirmPassword) {
      // Passwords match, change password
      // You can send a request to your server to change the password
      setMessage('Password changed successfully.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setMessage('New password and confirm password do not match.');
    }
  };

 

  return (
<div className="change-password-container">
<h1>Change Password</h1>
<div className="password-form">
<label>Current Password:</label>
<input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
<label>New Password:</label>
<input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
<label>Confirm Password:</label>
<input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
<button onClick={handleChangePassword}>Change Password</button>
</div>
      {message && <div className="message">{message}</div>}
</div>
  );
};

 

export default ChangePassword;