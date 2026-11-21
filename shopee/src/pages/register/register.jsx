import { useNavigate } from 'react-router-dom';
import './register.css'
import { useState } from "react";
import { registerUser } from "../../services/auth";

function Register() {
    let navigate = useNavigate()

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [password, setPassword] = useState("");


    const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await registerUser({
            first_name: firstName,
            last_name: lastName,
            email: email,
            mobileNo:mobileNo,
            password: password,
        });

        alert("Registration successful!");

        console.log(response.data);

    } catch (error) {
    console.log("Registration Error:", error);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Backend Response:", error.response.data);

        alert(JSON.stringify(error.response.data));

    } else {
        console.log("Connection Error:", error.message);
        alert("Cannot connect to Django server!");
    }
}
};


    return (
        <div className="overlay">
            <div className="reg_container">
                <button className="close-btn" title='close' onClick={()=> navigate("/login")}>&times;</button>
                <h4>Shopee</h4>
                <h2>Welcome to <span>Shopee</span></h2>
                <h3>“Find It. Love It. Buy It.”</h3>

                <form onSubmit={handleRegister}>
                    <div>
                        <div className="row">
                            <label>First Name :</label>
                            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        <div  className="row">
                            <label>Last Name :</label>
                            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>

                        <div  className="row">
                            <label>Mobile No :</label>
                            <input type="text" placeholder="Mobile No" value={mobileNo} onChange={(e) => setmobileNo(e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Email:</label>
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Create Password :</label>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Confirm Password :</label>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="row_btn">
                            <button type="submit" className="sub_btn" onClick={()=>navigate("/login")}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register
