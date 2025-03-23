import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaBell, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

function User() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: "https://www.w3schools.com/howto/img_avatar.png",
  });

  const [activityFeed, setActivityFeed] = useState([
    {
      id: 1,
      message: "You claimed a food donation from Green Bites.",
      date: "2025-01-02 10:00 AM",
    },
    {
      id: 2,
      message: "Your NGO has been approved for food donation from City Grill.",
      date: "2025-01-01 02:30 PM",
    },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, text: "New food donation from City Grill available!", isNew: true },
    { id: 2, text: "Your claim for food donation has been approved!", isNew: false },
  ]);

  const [settingsModal, setSettingsModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatedName, setUpdatedName] = useState(userInfo.name);
  const [updatedEmail, setUpdatedEmail] = useState(userInfo.email);

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      toast.success("Password updated successfully!", { position: toast.POSITION.TOP_CENTER });
      setNewPassword("");
      setConfirmPassword("");
      setSettingsModal(false);
    } else {
      toast.error("Passwords do not match. Please try again.", { position: toast.POSITION.TOP_CENTER });
    }
  };

  const handleUpdateProfile = () => {
    setUserInfo({ ...userInfo, name: updatedName, email: updatedEmail });
    toast.success("Profile updated successfully!", { position: toast.POSITION.TOP_CENTER });
    setSettingsModal(false);
  };

  const handleLogout = () => {
    toast.success("Logged out successfully!", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-teal-50 to-teal-100 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-10 tracking-wide">User Dashboard</h1>

        {/* User Profile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <img src={userInfo.profilePic} alt="Profile" className="w-32 h-32 rounded-full border-4 border-teal-400 shadow-lg hover:scale-105 transition-transform" />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-teal-700 mb-1">{userInfo.name}</h2>
            <p className="text-gray-600">{userInfo.email}</p>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Notifications */}
          <div>
            <h2 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2"><FaBell /> Notifications</h2>
            <div className="space-y-4">
              {notifications.map((n) => (
                <div key={n.id} className={`p-5 rounded-xl shadow-md flex justify-between items-center ${n.isNew ? 'bg-teal-50 border-l-4 border-teal-400' : 'bg-gray-100'}`}>
                  <p className="text-gray-700">{n.text}</p>
                  {n.isNew && <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">New</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <h2 className="text-xl font-semibold text-teal-600 mb-4">Activity Feed</h2>
            <div className="space-y-4">
              {activityFeed.map((a) => (
                <div key={a.id} className="p-5 rounded-xl shadow-md bg-white border-l-4 border-teal-300">
                  <p className="text-gray-700 mb-2">{a.message}</p>
                  <p className="text-gray-400 text-xs">{a.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-12">
          <button onClick={() => setSettingsModal(true)} className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:bg-teal-600 transition-transform hover:scale-105">
            <FaUserEdit /> Edit Profile
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-transform hover:scale-105">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Settings Modal */}
        {settingsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative animate__animated animate__fadeIn">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">Update Profile</h2>
              <input type="text" placeholder="Full Name" className="w-full mb-4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
              <input type="email" placeholder="Email Address" className="w-full mb-4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
              <h3 className="text-lg font-semibold text-teal-600 mt-6 mb-4">Change Password</h3>
              <input type="password" placeholder="New Password" className="w-full mb-4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <input type="password" placeholder="Confirm New Password" className="w-full mb-6 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <div className="flex justify-end gap-4">
                <button onClick={() => setSettingsModal(false)} className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                <button onClick={handleUpdateProfile} className="px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Save</button>
              </div>
            </div>
          </div>
        )}

      </div>
      <ToastContainer />
    </div>
  );
}

export default User;
