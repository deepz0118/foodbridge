// import React, { useContext, useState } from "react";
// import { FoodCard } from "./FoodCard";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function ClaimFood() {
//   const { posts, setPosts } = useContext(FoodCard);
//   const [claimModal, setClaimModal] = useState(false);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [ngoDetails, setNgoDetails] = useState({ name: "", contact: "", note: "" });

//   const handleClaim = () => {
//     if (ngoDetails.name && ngoDetails.contact) {
//       setPosts(
//         posts.map((post) =>
//           post.id === selectedPost.id ? { ...post, status: "Claimed" } : post
//         )
//       );
//       setClaimModal(false);
//       setNgoDetails({ name: "", contact: "", note: "" });
//       toast.success("Food claimed successfully!", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       toast.error("Please fill out all fields!", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center py-12" style={{
//       backgroundImage: "url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)",
//     }}>
//       <div className="container mx-auto px-6 bg-opacity-90 rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">Claim Food</h1>
//         <p className="text-lg text-gray-700 text-center mb-8">Claim available food donations from restaurants.</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
//                 post.status === "Claimed" ? "bg-gray-200" : "bg-teal-50"
//               }`}
//             >
//               <h3 className="text-xl font-bold text-teal-600">{post.restaurant}</h3>
//               <p className="text-gray-700">Food Type: {post.foodType}</p>
//               <p className="text-gray-700">Food Count: {post.foodCount}</p>
//               <p className={`font-semibold ${post.status === "Claimed" ? "text-red-500" : "text-green-500"}`}>{post.status}</p>
//               {post.status === "Available" && (
//                 <button
//                   onClick={() => {
//                     setSelectedPost(post);
//                     setClaimModal(true);
//                   }}
//                   className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
//                 >
//                   Claim Food
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {claimModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <h2 className="text-2xl font-bold text-teal-600 mb-4">Claim Food from {selectedPost?.restaurant}</h2>
//             <input
//               type="text"
//               placeholder="NGO Name"
//               className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               value={ngoDetails.name}
//               onChange={(e) => setNgoDetails({ ...ngoDetails, name: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Contact Details"
//               className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               value={ngoDetails.contact}
//               onChange={(e) => setNgoDetails({ ...ngoDetails, contact: e.target.value })}
//             />
//             <textarea
//               placeholder="Additional Notes (Optional)"
//               className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               value={ngoDetails.note}
//               onChange={(e) => setNgoDetails({ ...ngoDetails, note: e.target.value })}
//             ></textarea>
//             <div className="flex justify-end space-x-4">
//               <button onClick={() => setClaimModal(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
//                 Cancel
//               </button>
//               <button onClick={handleClaim} className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
//                 Claim
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// }

// export default ClaimFood;


import React, { useState } from "react";
import {FoodCard} from "./FoodCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClaimFood() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      restaurant: "Green Bites",
      foodCount: "50",
      foodType: "Vegetarian",
      status: "Available",
    },
    {
      id: 2,
      restaurant: "City Grill",
      foodCount: "30",
      foodType: "Non-Vegetarian",
      status: "Claimed",
    },
  ]);

  const [claimModal, setClaimModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [ngoDetails, setNgoDetails] = useState({ name: "", contact: "", note: "" });

  const handleClaim = () => {
    if (ngoDetails.name && ngoDetails.contact) {
      setPosts(
        posts.map((post) =>
          post.id === selectedPost.id ? { ...post, status: "Claimed" } : post
        )
      );
      setClaimModal(false);
      setNgoDetails({ name: "", contact: "", note: "" });
      toast.success("Food claimed successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Please fill out all fields!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-12" style={{
      backgroundImage: "url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)",
    }}>
      <div className="container mx-auto px-6 bg-opacity-90 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">Claim Food</h1>
        <p className="text-lg text-gray-700 text-center mb-8">Claim available food donations from restaurants.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                post.status === "Claimed" ? "bg-gray-200" : "bg-teal-50"
              }`}
            >
              <h3 className="text-xl font-bold text-teal-600">{post.restaurant}</h3>
              <p className="text-gray-700">Food Type: {post.foodType}</p>
              <p className="text-gray-700">Food Count: {post.foodCount}</p>
              <p className={`font-semibold ${post.status === "Claimed" ? "text-red-500" : "text-green-500"}`}>{post.status}</p>
              {post.status === "Available" && (
                <button
                  onClick={() => {
                    setSelectedPost(post);
                    setClaimModal(true);
                  }}
                  className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
                >
                  Claim Food
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {claimModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Claim Food from {selectedPost?.restaurant}</h2>
            <input
              type="text"
              placeholder="NGO Name"
              className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={ngoDetails.name}
              onChange={(e) => setNgoDetails({ ...ngoDetails, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contact Details"
              className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={ngoDetails.contact}
              onChange={(e) => setNgoDetails({ ...ngoDetails, contact: e.target.value })}
            />
            <textarea
              placeholder="Additional Notes (Optional)"
              className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={ngoDetails.note}
              onChange={(e) => setNgoDetails({ ...ngoDetails, note: e.target.value })}
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setClaimModal(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleClaim} className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Claim
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default ClaimFood;