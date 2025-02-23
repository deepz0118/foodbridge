import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaBell } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

function User() {
  // User Data
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: "https://www.w3schools.com/howto/img_avatar.png",
  });

  // User Activity Feed (for demonstration)
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

  // User Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New food donation from City Grill available!", isNew: true },
    { id: 2, text: "Your claim for food donation has been approved!", isNew: false },
  ]);

  // Settings Modal Toggle
  const [settingsModal, setSettingsModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatedName, setUpdatedName] = useState(userInfo.name);
  const [updatedEmail, setUpdatedEmail] = useState(userInfo.email);

  // Handle Changing Password
  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      toast.success("Password updated successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setNewPassword("");
      setConfirmPassword("");
      setSettingsModal(false);
    } else {
      toast.error("Passwords do not match. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // Handle Updating Profile Info
  const handleUpdateProfile = () => {
    setUserInfo({ ...userInfo, name: updatedName, email: updatedEmail });
    toast.success("Profile updated successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
    setSettingsModal(false);
  };

  // Handle Logout
  const handleLogout = () => {
    toast.success("Logged out successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
    // Logic for logging out the user can be added here (e.g., redirect to login page)
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)",
      }}
    >
      <div className="container mx-auto px-6 bg-opacity-90 rounded-lg shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-teal-600 text-center mb-8 animate__animated animate__fadeInUp">
          User Dashboard
        </h1>

        {/* User Profile Section */}
        <div className="flex items-center justify-center mb-8 space-x-4">
          <img
            src={userInfo.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-xl transition-transform transform hover:scale-110"
          />
          <div>
            <h2 className="text-2xl font-semibold text-teal-600">{userInfo.name}</h2>
            <p className="text-lg text-gray-600">{userInfo.email}</p>
          </div>
        </div>

        {/* Notifications and Activity Feed in Equal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Notifications Section as Cards */}
          <div className="animate__animated animate__fadeInUp">
            <h2 className="text-lg font-semibold text-teal-600 mb-4">Notifications</h2>
            <div className="space-y-6">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300 ${
                    notification.isNew
                      ? "bg-teal-100 border-teal-600"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-gray-700">{notification.text}</p>
                    {notification.isNew && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed Section as Cards */}
          <div className="animate__animated animate__fadeInUp">
            <h2 className="text-lg font-semibold text-teal-600 mb-4">Activity Feed</h2>
            <div className="space-y-6">
              {activityFeed.map((activity) => (
                <div
                  key={activity.id}
                  className="p-6 rounded-lg shadow-xl bg-teal-50 border-teal-300 transform transition-transform hover:scale-105 duration-300"
                >
                  <p className="text-gray-700">{activity.message}</p>
                  <p className="text-gray-500 text-xs">{activity.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Button */}
        <div className="text-center mb-6">
          <button
            onClick={() => setSettingsModal(true)}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            Change Profile / Password
          </button>
        </div>

        {/* Logout Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>

        {/* Settings Modal */}
        {settingsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">Update Profile</h2>

              {/* Name Field */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />

              {/* Email Field */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />

              {/* Password Fields */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-teal-600">Change Password</h3>
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={() => setSettingsModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProfile}
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                >
                  Save Changes
                </button>
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
