import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FoodProvider } from './pages/FoodCard';
import Navbar from './components/Navbar';
import DonationForm from './pages/DonationForm'

//import Footer from './components/Footer';
import User from './pages/User';
import Home from './pages/Home';
import Login from './pages/Login';
import ClaimFood from './pages/ClaimFood';
import { FoodCard } from './pages/FoodCard';
import Dashboard from './pages/Dashboard';
import Programs from './pages/Programs';

function App() {
  return (
    <FoodProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donate" element={<DonationForm />} />
            <Route path="/claimfood" element={<ClaimFood/>}/>
            <Route path="/foodcard" element={<FoodCard />} />
            <Route path="/programs" element={<Programs />} />

        </Routes>
      </main>
    
    </div>
  </FoodProvider>
  );
}

export default App;
