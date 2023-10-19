import React, { useState } from 'react';
import './Profile.css';

 

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    firstName: 'Amiangshu',
    lastName: 'Deb',
    phoneNumber: '123-456-7890',
    email: 'amiangshu@example.com',
    avatar: null, // To store the uploaded avatar image
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

 

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

 

    reader.onload = () => {
      setUserProfile({
        ...userProfile,
        avatar: reader.result,
      });
    };

 

    reader.readAsDataURL(file);
  };

 

  return (
<div className="profile-container">
<h1>Edit Your Profile</h1>
<form className="profile-form">
<label>First Name:</label>
<input
          type="text"
          name="firstName"
          value={userProfile.firstName}
          onChange={handleInputChange}
        />
<label>Last Name:</label>
<input
          type="text"
          name="lastName"
          value={userProfile.lastName}
          onChange={handleInputChange}
        />
<label>Phone Number:</label>
<input
          type="text"
          name="phoneNumber"
          value={userProfile.phoneNumber}
          onChange={handleInputChange}
        />
<label>Email:</label>
<input
          type="email"
          name="email"
          value={userProfile.email}
          onChange={handleInputChange}
        />
<div className="avatar-container">
<label>Profile Picture:</label>
          {userProfile.avatar ? (
<img className="avatar" src={userProfile.avatar} alt="User Avatar" />
          ) : (
<p>No avatar selected</p>
          )}
<input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
          />
</div>
<div className="button-container">
<button>Save Changes</button>
<button>Cancel</button>
</div>

</form>
</div>
  );
};

 

export default Profile;