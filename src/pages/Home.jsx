import React from 'react';
import { FaHandsHelping, FaRegHeart, FaStore } from 'react-icons/fa'; // Adding icons for stats

function Home() {
  return (
    <div className="relative bg-gray-100" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Hero Section */}
      <div className="flex items-center justify-between h-screen p-10">
        {/* Image Section */}
        <div className="w-1/2">
          <img 
            src="https://media.istockphoto.com/id/1224414210/vector/food-donation-and-charity.jpg?s=612x612&w=0&k=20&c=Zwz7H7M1-8d23Zpgz127eAaypBznKeGm05dXe80WzHs=" 
            alt="Food Donation"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 text-white text-right p-10">
          <h1 className="text-3xl text-black font-bold mb-6">Bringing Food to Those Who Need It Most</h1>
          <p className="text-xl text-black mb-8">Join us in the fight against hunger and food waste.</p>
          <div>
            <button className="bg-black text-white px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out mr-4">Donate Food</button>
            <button className="bg-black text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out">Join the Cause</button>
          </div>
        </div>
      </div>

      {/* Impactful Statistics Section */}
      <div className="text-center py-16 bg-white" id="impact">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">The Power of Giving</h2>
        <div className="flex justify-center space-x-10">
          <div className="text-gray-700">
            <FaStore className="text-teal-600 text-5xl mb-4" />
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-lg">Restaurants Connected</p>
          </div>
          <div className="text-gray-700">
            <FaHandsHelping className="text-teal-600 text-5xl mb-4" />
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-lg">Families Fed</p>
          </div>
          <div className="text-gray-700">
            <FaRegHeart className="text-teal-600 text-5xl mb-4" />
            <h3 className="text-4xl font-bold">Thousands</h3>
            <p className="text-lg">Meals Saved</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-teal-50 py-16 text-center">
        <h2 className="text-3xl font-semibold text-teal-600 mb-8">How It Works</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Donate Food</h3>
            <p className="text-lg text-gray-700">Easily upload surplus meals from your restaurant or event.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Connect with NGOs</h3>
            <p className="text-lg text-gray-700">We’ll match you with NGOs or individuals in need of food donations.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Spread Love</h3>
            <p className="text-lg text-gray-700">Help reduce food waste while making a real difference in your community.</p>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default Home;
