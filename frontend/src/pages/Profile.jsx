import React, { useContext, useState } from 'react';
import { userDataContext } from '../context/UserContext';
import Title from '../component/Title';
import { FaPencilAlt } from 'react-icons/fa';

function Profile() {
  const { userData, getCurrentUser } = useContext(userDataContext);
  
  // Initialize state with user data
  const [profileData, setProfileData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    phone: userData?.phone || '',
    dateOfBirth: userData?.dateOfBirth || ''
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSaveProfile = async () => {
    // For now, just show a message since we're not changing backend
    // In a real implementation, you would call the API here
    setIsEditing(false);
    alert('Profile updated successfully! (Note: In a full implementation, this would save to the database)');
  };

  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden font-serif pt-24'>
      {/* Profile Header */}
      <div className='bg-gray-100 py-8'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-3xl font-light text-black'>Your Profile</h1>
          <p className='text-gray-600 mt-2'>Manage your account and preferences</p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Profile Header Section */}
        <div className='bg-white border border-gray-200 p-6 rounded-lg mb-6'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center'>
              <span className='text-2xl font-bold text-gray-700'>
                {userData?.name?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div>
              <h3 className='text-lg font-medium text-black'>{userData?.name || 'User'}</h3>
              <p className='text-sm text-gray-600'>Member since 2025</p>
            </div>
          </div>
        </div>

        {/* Account Information Section */}
        <div className='bg-white border border-gray-200 p-6 rounded-lg mb-6'>
          <h2 className='text-xl font-medium text-black mb-6 border-b border-gray-200 pb-3'>
            Account Information
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
              <div className='relative'>
                <input
                  type='text'
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
                  readOnly={!isEditing}
                />
                {!isEditing && (
                  <button
                    type='button'
                    onClick={() => setIsEditing(true)}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    <FaPencilAlt size={16} />
                  </button>
                )}
              </div>
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
              <div className='relative'>
                <input
                  type='email'
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
                  readOnly={!isEditing}
                />
                {!isEditing && (
                  <button
                    type='button'
                    onClick={() => setIsEditing(true)}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    <FaPencilAlt size={16} />
                  </button>
                )}
              </div>
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
              <div className='relative'>
                <input
                  type='tel'
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
                  placeholder='Add phone number'
                  readOnly={!isEditing}
                />
                {!isEditing && (
                  <button
                    type='button'
                    onClick={() => setIsEditing(true)}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    <FaPencilAlt size={16} />
                  </button>
                )}
              </div>
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Date of Birth</label>
              <div className='relative'>
                <input
                  type='date'
                  value={profileData.dateOfBirth}
                  onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black'
                  placeholder='Add date of birth'
                  readOnly={!isEditing}
                />
                {!isEditing && (
                  <button
                    type='button'
                    onClick={() => setIsEditing(true)}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    <FaPencilAlt size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className='mt-6 flex gap-4'>
            {!isEditing ? (
              <button 
                type='button'
                onClick={() => setIsEditing(true)}
                className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors'
              >
                Edit Information
              </button>
            ) : (
              <>
                <button 
                  type='button'
                  onClick={handleSaveProfile}
                  className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors'
                >
                  Save Changes
                </button>
                <button 
                  type='button'
                  onClick={() => {
                    setIsEditing(false);
                    // Reset to original values
                    setProfileData({
                      name: userData?.name || '',
                      email: userData?.email || '',
                      phone: userData?.phone || '',
                      dateOfBirth: userData?.dateOfBirth || ''
                    });
                  }}
                  className='bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition-colors'
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Password Section */}
        <div className='bg-white border border-gray-200 p-6 rounded-lg mb-6'>
          <h2 className='text-xl font-medium text-black mb-6 border-b border-gray-200 pb-3'>
            Password & Security
          </h2>
          
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Current Password</label>
              <input
                type='password'
                className='w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
                placeholder='Enter current password'
              />
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>New Password</label>
              <input
                type='password'
                className='w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
                placeholder='Enter new password'
              />
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Confirm New Password</label>
              <input
                type='password'
                className='w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
                placeholder='Confirm new password'
              />
            </div>
            
            <button className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors'>
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;