import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import api from '../../api/axiosConfig';


// const Login = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = inputValue;
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-left",
//     });

//  const handleSubmit = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;

    
//     try {
//       // Use your configured 'api' instance
//       const { data } = await api.post('/login', { email, password });

//       // Check for the success property from your backend response
//       if (data.success) {
//         // Redirect to the dashboard project. The browser automatically has the cookie.
//         // window.location.href = 'https://d-pravah-dashboard.vercel.app';
//         window.location.href = `https://d-pravah-dashboard.vercel.app/?token=${data.token}`;
//       } else {
//         alert(data.message); // Show error message from backend
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       handleError('Login failed. Please try again.');
//     }
  

//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//     });
//   };

const Login = () => {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://d-pravah-backend.vercel.app/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log('✅ Success is true. Preparing to redirect...');
        setTimeout(() => {
          window.location.href = "https://d-pravah-dashboard.vercel.app/"; 
        }, 1000);
      } else {
        handleError(message);
        setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;