import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyProfiles.css';
import { useAuth } from '../store/auth';

const MyProfiles = () => {
  const [profile, setProfile] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-field">
        <p><strong>Name:</strong> <span>{profile.username}</span></p>
      </div>
      <div className="profile-field">
        <p><strong>Email:</strong> <span>{profile.email}</span></p>
      </div>
      <div className="profile-field">
        <p><strong>Date of Birth:</strong> <span>{profile.dateOfBirth}</span></p>
      </div>
      <div className="profile-field">
        <p><strong>Mobile:</strong> <span>{profile.mobile}</span></p>
      </div>
      {/* Add more profile fields as needed */}
      <Link to={`/edit-profile/${profile._id}`} className="edit-profile-button">Edit Profile</Link>
    </div>
  );
};

export default MyProfiles;
