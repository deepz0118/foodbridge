import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMessage(""); // Clear the message when toggling forms
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    

    // Input validation
    if (!email || !password) {
      setMessage("Email and password are required.");
      return;
    }

    // Password confirmation check (only for Sign Up)
    if (!isLogin && password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const endpoint = isLogin
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/register";

    const payload = { email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Something went wrong.");
      } else {
        setMessage(data.message);
        if (isLogin && email=="admin@gmail.com" && password=='admin') {
         
            navigate('/dashboard');
          }
          else{
            navigate('/claimfood')
          }
        //   setEmail("");
        //   setPassword("");
        // } else {
        //   // Clear form on successful registration
        //   toggleForm();
        // }
      }
    } catch (error) {
      console.error("Error connecting to the server:", error);
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)`,
      }}
    >
      <div className="w-[400px] bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h2>
        {message && (
          <p
            className={`text-center font-semibold mb-4 ${
              message.includes("Success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span
            onClick={toggleForm}
            className="text-teal-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Create an account" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
