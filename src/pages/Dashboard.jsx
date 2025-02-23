import React, { useState,useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import {FoodCard} from "./FoodCard";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [newRestaurantPost, setNewRestaurantPost] = useState({
    restaurant: "",
    contact: "",
    foodCount: "",
    foodType: "Vegetarian",
    expiryDate: "",
    details: ""
  });
  const [showPopup, setShowPopup] = useState(false);

  // Handle Adding New Restaurant Post
  const handleAddPost = () => {
    if (
      newRestaurantPost.restaurant &&
      newRestaurantPost.contact &&
      newRestaurantPost.foodCount &&
      newRestaurantPost.expiryDate
    ) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          ...newRestaurantPost,
          status: "Available",
        },
      ]);
      setNewRestaurantPost({
        restaurant: "",
        contact: "",
        foodCount: "",
        foodType: "Vegetarian",
        expiryDate: "",
        details: ""
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
    <div
      className="min-h-screen bg-cover bg-center py-8"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)",
      }}
    >
      <div className="container mx-auto bg-opacity-80 p-4 rounded-lg shadow-lg max-w-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
        <h1 className="text-2xl font-bold text-teal-600 text-center mb-4">
          Restaurant Dashboard
        </h1>
        <p className="text-md text-gray-700 text-center mb-4">
          Add food donations that NGOs can claim.
        </p>

        <div className="space-y-3 mb-7">
          <input
            type="text"
            placeholder="Restaurant Name"
            className="w-5/6 p-2 border rounded-lg bg-white bg-opacity-80"
            value={newRestaurantPost.restaurant}
            onChange={(e) =>
              setNewRestaurantPost({
                ...newRestaurantPost,
                restaurant: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-5/6 p-2 border rounded-lg bg-white bg-opacity-80"
            value={newRestaurantPost.contact}
            onChange={(e) =>
              setNewRestaurantPost({
                ...newRestaurantPost,
                contact: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Food Count"
            className="w-5/6 p-2 border rounded-lg bg-white bg-opacity-80"
            value={newRestaurantPost.foodCount}
            onChange={(e) =>
              setNewRestaurantPost({
                ...newRestaurantPost,
                foodCount: e.target.value,
              })
            }
          />
          <select
            className="w-5/6 p-2 border rounded-lg bg-white bg-opacity-80"
            value={newRestaurantPost.foodType}
            onChange={(e) =>
              setNewRestaurantPost({
                ...newRestaurantPost,
                foodType: e.target.value,
              })
            }
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
          <input
            type="date"
            className="w-5/6 p-2 border rounded-lg bg-white bg-opacity-80"
            value={newRestaurantPost.expiryDate}
            onChange={(e) =>
              setNewRestaurantPost({
                ...newRestaurantPost,
                expiryDate: e.target.value,
              })
            }
          />
          <textarea
            placeholder="Additional Details"
            className="w-5/6 p-2 border rounded-lg bg-white bg-opacity-80"
            value={newRestaurantPost.details}
            onChange={(e) =>
              setNewRestaurantPost({
                ...newRestaurantPost,
                details: e.target.value,
              })
            }
          ></textarea>
          <button
            onClick={handleAddPost}
            className="w-5/6 p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Add Food Post
          </button>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-bold text-teal-600 mb-2">Success!</h2>
            <p className="text-gray-700">Food details have been added successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
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
