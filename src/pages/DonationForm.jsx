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
    <form
      className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4">Donate Food</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Food Type"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="datetime-local"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default DonationForm;
