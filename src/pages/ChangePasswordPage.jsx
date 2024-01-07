// src/pages/ChangePasswordPage.js
import React, { useState } from 'react';
import { changePassword } from '../api/api';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      const passwordData = { current_password: currentPassword, new_password: newPassword, new_confirm_password: confirmNewPassword };
      // Call the changePassword API function with password data
      const response = await changePassword(passwordData);
      console.log('Password change successful:', response);
      // Add logic to handle successful password change (e.g., display success message)
    } catch (error) {
      console.error('Password change failed:', error);
      // Add logic to handle password change failure (e.g., display error message)
    }
  };

  return (
    <div>
      <h1>Change Password Page</h1>
      <form>
        <label>Current Password:</label>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        <br />
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <br />
        <label>Confirm New Password:</label>
        <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleChangePassword}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
