import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import './login.css';
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();



    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const response = await loginUser({
                email,
                password,
            });

            localStorage.setItem(
                "access_token",
                response.data.access
            );

            localStorage.setItem(
                "refresh_token",
                response.data.refresh
            );

            const accessToken = response.data.access;

        const userResponse = await axios.get(
            "http://127.0.0.1:8000/api/me/",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        localStorage.setItem(
            "user",
            JSON.stringify(userResponse.data)
        );

        if (userResponse.data.is_superuser) {
            navigate("/admin");
        } else {
            navigate("/home");
        }

        alert("Login successful!");

        } catch (error) {
            console.log(error.response?.data);
            setError("Invalid email or password!");
        }
    };

    return(
        <div className="main">
            <div className="log-container">
                <h2>Log<span>In</span></h2>
                <form onSubmit={handleLogin}>
                <div className="row">
                    <label>Email/Mobile no</label>
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                </div>
                <div className="row">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}required/>
                     
                </div>
                {error && <p style={{color:"red"}}>{error}</p>}
                <button type="submit" className="log-btn">Login</button>
                <div className="new">
                    <Link to={"/register"}>Create Account</Link>
                    <Link to={"/forget"}>Forget Password</Link>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Login