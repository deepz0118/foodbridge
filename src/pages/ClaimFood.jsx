import React, { useEffect, useState } from "react";
import { BadgeCheck, AlertCircle, MapPin, UserCheck } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog } from "@headlessui/react";

function ClaimFood() {
  const [restaurantPosts, setRestaurantPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [ngoDetails, setNgoDetails] = useState({ name: "", contact: "" });

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("restaurantPosts")) || [];
    setRestaurantPosts(storedPosts);
  }, []);

  const updateLocalStorage = (updatedPosts) => {
    localStorage.setItem("restaurantPosts", JSON.stringify(updatedPosts));
    setRestaurantPosts(updatedPosts);
  };

  const handleClaim = (id) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const updatedPosts = restaurantPosts.map((post) =>
          post.id === id
            ? {
                ...post,
                status: "Claimed",
                ngoLocation: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
              }
            : post
        );
        updateLocalStorage(updatedPosts);
        toast.success("Food claimed successfully & location captured!");
      },
      () => {
        toast.error("Location access denied!");
      }
    );
  };

  const handleReceivedClick = (id) => {
    setSelectedPostId(id);
    setOpenModal(true);
  };

  const confirmReceived = () => {
    if (!ngoDetails.name || !ngoDetails.contact) {
      toast.error("Please enter NGO name and contact!");
      return;
    }
    const updatedPosts = restaurantPosts.map((post) =>
      post.id === selectedPostId
        ? { ...post, status: "Received", ngoDetails }
        : post
    );
    updateLocalStorage(updatedPosts);
    setOpenModal(false);
    setNgoDetails({ name: "", contact: "" });
    toast.success("Marked as received & authenticated!");
  };

  const getStatusBadge = (status) => {
    if (status === "Available") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
          <BadgeCheck className="w-4 h-4" /> Available
        </span>
      );
    } else if (status === "Claimed") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">
          <AlertCircle className="w-4 h-4" /> Claimed
        </span>
      );
    } else if (status === "Received") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
          ✅ Received
        </span>
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-10"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)",
      }}
    >
      {/* Light transparent overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-teal-800 text-center mb-10 drop-shadow-lg">
          Available Food Donations 🍱
        </h1>

        {restaurantPosts.length === 0 ? (
          <p className="text-center text-gray-800 text-lg">No food posts available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/80 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 backdrop-blur-md"
              >
                <h2 className="text-2xl font-bold text-teal-700 mb-2">{post.restaurant}</h2>
                <p className="text-gray-800 mb-1"><strong>📞 Contact:</strong> {post.contact}</p>
                <p className="text-gray-800 mb-1"><strong>🍽️ Food Count:</strong> {post.foodCount}</p>
                <p className="text-gray-800 mb-1"><strong>🥗 Food Type:</strong> {post.foodType}</p>
                <p className="text-gray-800 mb-1"><strong>⏳ Expiry Date:</strong> {post.expiryDate}</p>
                <p className="text-gray-800 mb-2"><strong>📝 Details:</strong> {post.details}</p>

                <div className="flex justify-between items-center mt-4">
                  {getStatusBadge(post.status)}
                </div>

                {post.ngoLocation && (
                  <p className="text-sm text-gray-700 mt-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    NGO Location: {post.ngoLocation.lat.toFixed(2)}, {post.ngoLocation.lng.toFixed(2)}
                  </p>
                )}

                {post.ngoDetails && post.status === "Received" && (
                  <p className="text-sm text-gray-700 mt-1">
                    <UserCheck className="inline w-4 h-4 mr-1" /> Verified NGO: {post.ngoDetails.name}, {post.ngoDetails.contact}
                  </p>
                )}

                <div className="mt-4 space-x-2">
                  {post.status === "Available" && (
                    <button
                      onClick={() => handleClaim(post.id)}
                      className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                    >
                      Claim Food
                    </button>
                  )}
                  {post.status === "Claimed" && (
                    <button
                      onClick={() => handleReceivedClick(post.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Confirm Received
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        <ToastContainer />
      </div>

      {/* Modal for NGO Authentication */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white/90 rounded-lg p-6 shadow-xl w-full max-w-md backdrop-blur-md">
          <Dialog.Title className="text-lg font-bold mb-4">Confirm NGO Identity</Dialog.Title>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="NGO Name"
              className="w-full p-2 border rounded-lg"
              value={ngoDetails.name}
              onChange={(e) => setNgoDetails({ ...ngoDetails, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="NGO Contact"
              className="w-full p-2 border rounded-lg"
              value={ngoDetails.contact}
              onChange={(e) => setNgoDetails({ ...ngoDetails, contact: e.target.value })}
            />
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmReceived}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default ClaimFood;
