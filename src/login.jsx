import React, { useState } from 'react';

function Login() {
  // State to store input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State to store message
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and password are filled
    if (username === '' || password === '') {
      setMessage('Both fields are required!');
    } else if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> Username : </label>
          <input
            type="text"
            id="username"
            value= {username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password"> Password :  </label>
          <input
            type="password"
            id="password"
            value= {password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
