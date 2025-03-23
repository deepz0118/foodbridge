import React, { useState } from 'react';

function DonationForm({ onSubmit }) {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ foodType, quantity, pickupTime });
    setFoodType('');
    setQuantity('');
    setPickupTime('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-teal-100 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg transition-transform hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">Donate Food</h2>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold">Food Type</label>
          <input
            type="text"
            placeholder="e.g., Rice, Bread, Vegetables"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold">Quantity (Servings)</label>
          <input
            type="number"
            placeholder="e.g., 50"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-gray-700 font-semibold">Pickup Time</label>
          <input
            type="datetime-local"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-md"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
