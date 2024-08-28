import React, { useState } from "react";
import "./Loginform.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //   axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    console.log(values);
    try {
      await fetch("http://localhost:8086/api/auth/login", {
        headers: {
          'content-type':'application/json',
          'accept':'application/json',
          'access-content-origin': '*'
        },
        method: "post",
        body: JSON.stringify(values),
      })
        .then((res) => { toast.success("login successful !");})
        .catch((err) => {toast.error("login failed!");});
        navigate("/Dashboard")
      // event.preventDefault();
      // axios.post('http://localhost:8081/login', values)
      //   .then(res => {
      //     if (res.data.Status === "Success") {

      //           navigate("/Home");

      //     } else {
      //       alert("Error");
      //     }
      //   })
      //   .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="body">
      <ToastContainer />
      <div className="wrapper">
        {/* <form action="" onSubmit={handleSubmit}> */}
        <h1>Login</h1>
        <div className="input-box">
          <label htmlFor="Name">
            <strong>Name</strong>
          </label>
          <input
            type="name"
            placeholder="Name"
            required
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button onClick={handleSubmit}>Login</button>

        <div className="register-link">
          <p>
            Don't have an account?
            <a href="#" onClick={() => navigate("/register")}>
              Register
            </a>
          </p>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default LoginForm;
