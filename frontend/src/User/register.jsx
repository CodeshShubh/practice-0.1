import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { register } from "../redux/actions/user";

const Register = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  
 
  // Submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();
   const userData = {
    name:name,
    email:email,
    password:password,
   }

  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        <Link to="/login">login</Link>
      </form>
    </div>
  );
};

export default Register;
 