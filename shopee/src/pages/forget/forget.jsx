import React from "react";
import './forget.css'
import { Link } from "react-router-dom";

function ForgetPassword(){
    let handleSubmit =()=>{
        alert("Password changed successfully!")
    }
    return(
        <div className="main">
            <div className="container">
                <div className="container-row">
                    <h3>Forget <span>Password</span>?</h3>
                    <div className="container-row1">
                        <div className="row">
                            <label>Email/Mobile</label>
                            <input type="text" placeholder="Enter Email or Mobile"/>
                        </div>
                        <div className="row">
                            <label>New Password</label>
                            <input type="password" placeholder="Enter New Password"/>
                        </div>
                        <div className="row">
                            <label>Confirm Password</label>
                            <input type="passowrd" placeholder="Re-enter Password"/>
                        </div>
                        <Link className="row-link" to={"/login"}>Back to login page</Link>
                    </div>
                    <button onClick={()=> handleSubmit()} className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword;