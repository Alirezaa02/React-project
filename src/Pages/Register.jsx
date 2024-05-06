import React, { useState } from 'react';

const Rpage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null); // State to manage error messages

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Perform email validation
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("Please enter all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords are not match.");
      return;
    }

    try {
      const response = await fetch("http://4.237.58.241:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "An error occurred during registration."
        );
      }

      console.log("Registration done:", data);
    } catch (err) {
      setError(err.message || "Failed to register.");
    }
  };

  return (

    <div className='Register'>
      <h2>Register</h2>
      {error && <p>{error}</p>} {/* Display error message if there's an error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Rpage;
