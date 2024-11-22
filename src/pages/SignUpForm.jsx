import React, { useState } from 'react';

function SignUpForm() {
  // State variables to store form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { username, email, password });
    // Optionally, you can add logic here to send this data to a server
  };

  // Inline styling
  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
    
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#218838',
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
