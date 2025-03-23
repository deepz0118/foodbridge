import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-3xl text-teal-500 font-bold">Food Connect</h1>
      <ul className="text-2xl text-teal-500 flex space-x-4">
        <li><Link to="/" className="hover:text-gray-200 transition-colors">Home</Link></li>
        <li><Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link></li>
        {/* <li><Link to="/user" className="hover:text-gray-200 transition-colors">User</Link></li> */}
        <li><Link to="/programs" className="hover:text-gray-200 transition-colors">Programs</Link></li>
        {/* <li><Link to="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</Link></li>
        <li><Link to="/claimfood" className="hover:text-gray-200 transition-colors">Claim</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
