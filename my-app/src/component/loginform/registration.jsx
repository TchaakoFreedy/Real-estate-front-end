import React, { useState } from "react";
import './registration.css'; // Import your CSS for styling
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { FaUser } from "react-icons/fa6"; // User icon
import { FaLock } from "react-icons/fa"; // Lock icon for password
import { MdEmail } from "react-icons/md"; // Email icon
import axios from 'axios'; // Axios for making HTTP requests
import { ToastContainer, toast } from 'react-toastify';

const RegisterForm = () => { 
    const navigate = useNavigate(); // React Router's hook to navigate programmatically
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState(""); // State for success/error message
    const [isError, setIsError] = useState(false); // State to determine if the message is an error
    const [role, setRole] = useState("customer");
  

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          await fetch("http://localhost:8086/api/auth/register", {
            headers: {
              'content-type':'application/json',
              'accept':'application/json',
              'access-content-origin': '*'
            },
            method: "post",
            body: JSON.stringify({
                username,
                email,
                password,
                role,
            }

            ),
          })
            .then(async(res) => { 
                console.log(res);
                if(res.ok){
                   toast.success("Registerred successful !")
               }
               const data = await res.text()
              navigate("/login")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Registerred failed !");});
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
                <form onSubmit={e=>handleSubmit(e)}>
                    <h1>Register</h1>
                    
                    {/* Display success or error message */}
                    {message && (
                        <div className={`{message ${isError ? 'error' : 'success'}`}>
                            {message}
                        </div>
                    )}

                    <div className="input-box">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value )}
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value )}
                        />
                        <MdEmail className="icon" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value )}
                        />
                        <FaLock className="icon" />
                
                    </div>
                    <div className="">
                    <select className="input-box" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value={""}>Select role</option>
                <option value={"Customer"}>Customer</option>
                <option value={"Tenant"}>Tenant</option>
                <option value={"Agent"}>Agent</option>
                <option value={"Admin"}>Admin</option>
                
              </select>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                    </div>

                    <button>Register</button>
                    <p className="policy">You have agreed with our terms and policies</p>

                    <button type="button" onClick={() => navigate("/login")}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
