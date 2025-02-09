import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './EditProfiles.css';
import { toast } from 'react-toastify';

const EditProfiles = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    mobile: ''
  });
  const params = useParams();
  const { user, authorizationToken, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken
        },
        body: JSON.stringify({
          username: profile.username,
          dateOfBirth: profile.dateOfBirth,
          mobile: profile.mobile
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        if (typeof setUser === 'function') {
          setUser(updatedUser); // Update the user in the auth context
        }
        toast.success("Updated Successfully");
        navigate('/myprofile'); // Redirect to MyProfiles page
      } else {
        const errorData = await response.json();
        toast.error(`Not Updated: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error); // Log the error details
      toast.error("An error occurred");
    }
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default EditProfiles;
