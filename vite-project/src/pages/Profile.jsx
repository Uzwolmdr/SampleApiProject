import { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Sample user data - in real app, this would come from API/context
  const userData = {
    name: 'Neeraj Dhungana',
    userCode: '123654',
    email: 'neeraj.dhungana@gmeremit.com',
    fullName: 'Neeraj Dhungana',
    contactNumber: '+86342134234',
    country: 'Korea',
    address: 'Seoul, Korea',
    username: 'nrj.dhungana',
    passwordChangeWarningDays: 12
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-icon-title">
          <svg className="page-icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="6" height="6" rx="1" fill="#9CA3AF"/>
            <rect x="11" y="3" width="6" height="6" rx="1" fill="#9CA3AF"/>
            <rect x="3" y="11" width="6" height="6" rx="1" fill="#9CA3AF"/>
            <rect x="11" y="11" width="6" height="6" rx="1" fill="#9CA3AF"/>
          </svg>
          <h1 className="page-title">Profile</h1>
        </div>
      </div>

      <div className="user-info-header">
        <div className="user-avatar-large">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#E2E8F0"/>
            <path d="M40 25C47.1797 25 53 30.8203 53 38C53 45.1797 47.1797 51 40 51C32.8203 51 27 45.1797 27 38C27 30.8203 32.8203 25 40 25Z" fill="#4A5568"/>
            <path d="M40 45C30.0589 45 22 52.0589 22 62H58C58 52.0589 49.9411 45 40 45Z" fill="#4A5568"/>
          </svg>
        </div>
        <div className="user-info-text">
          <h2 className="user-name">{userData.name}</h2>
          <p className="user-code">User Code: {userData.userCode}</p>
        </div>
      </div>

      <div className="profile-tabs">
        <button
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`tab-button ${activeTab === 'roles' ? 'active' : ''}`}
          onClick={() => setActiveTab('roles')}
        >
          Roles & Privillege
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="profile-content">
          <div className="basic-details-section">
            <h3 className="section-title">Basic Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{userData.fullName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email address:</span>
                <span className="detail-value">{userData.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Contact Number:</span>
                <span className="detail-value">{userData.contactNumber}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value">{userData.country}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Address:</span>
                <span className="detail-value">{userData.address}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Username:</span>
                <span className="detail-value">{userData.username}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Password Change Warning Days:</span>
                <span className="detail-value">{userData.passwordChangeWarningDays} days</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'roles' && (
        <div className="profile-content">
          <div className="basic-details-section">
            <h3 className="section-title">Roles & Privileges</h3>
            <p className="empty-state">Roles and privileges information will be displayed here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

