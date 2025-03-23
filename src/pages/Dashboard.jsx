import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("restaurantPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [newPost, setNewPost] = useState({
    restaurant: "",
    contact: "",
    foodCount: "",
    foodType: "Vegetarian",
    expiryDate: "",
    details: "",
    lat: "",
    lng: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("restaurantPosts", JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = () => {
    if (
      newPost.restaurant &&
      newPost.contact &&
      newPost.foodCount &&
      newPost.expiryDate &&
      newPost.lat &&
      newPost.lng
    ) {
      const updatedPosts = [
        ...posts,
        {
          id: Date.now(),
          ...newPost,
          status: "Available"
        },
      ];
      setPosts(updatedPosts);
      setNewPost({
        restaurant: "",
        contact: "",
        foodCount: "",
        foodType: "Vegetarian",
        expiryDate: "",
        details: "",
        lat: "",
        lng: ""
      });
      setShowPopup(true);
      toast.success("Restaurant details added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Please fill out all fields!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-10 flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)"
      }}
    >
      <div className="backdrop-blur-md bg-white/30 p-10 rounded-3xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">
          Restaurant Dashboard
        </h1>
        <p className="text-md text-gray-800 text-center mb-8">
          Add food donations that NGOs can claim.
        </p>

        <div className="space-y-4">
          <input type="text" placeholder="Restaurant Name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.restaurant}
            onChange={(e) => setNewPost({ ...newPost, restaurant: e.target.value })}
          />
          <input type="text" placeholder="Contact Number"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.contact}
            onChange={(e) => setNewPost({ ...newPost, contact: e.target.value })}
          />
          <input type="number" placeholder="Food Count"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.foodCount}
            onChange={(e) => setNewPost({ ...newPost, foodCount: e.target.value })}
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.foodType}
            onChange={(e) => setNewPost({ ...newPost, foodType: e.target.value })}
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
          <input type="date"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.expiryDate}
            onChange={(e) => setNewPost({ ...newPost, expiryDate: e.target.value })}
          />
          <input type="text" placeholder="Latitude"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.lat}
            onChange={(e) => setNewPost({ ...newPost, lat: e.target.value })}
          />
          <input type="text" placeholder="Longitude"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.lng}
            onChange={(e) => setNewPost({ ...newPost, lng: e.target.value })}
          />
          <textarea placeholder="Additional Details"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90"
            value={newPost.details}
            onChange={(e) => setNewPost({ ...newPost, details: e.target.value })}
          ></textarea>

          <button
            onClick={handleAddPost}
            className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow-md"
          >
            Add Food Post
          </button>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold text-teal-600 mb-3">Success!</h2>
            <p className="text-gray-700 mb-4">
              Food details have been added successfully.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
