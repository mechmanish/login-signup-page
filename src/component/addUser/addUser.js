import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./addUser.css";

import { getRegistrationRequest } from "../../redux/userRegistration/userRegistration.action";
import { useDispatch, useSelector } from 'react-redux';

const AddUser = () => {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [psswrd, setPsswrd] = useState("");
    const [role, setRole] = useState("");

    const submitBtnHandler = () => {
        console.log("submitBtnClicked in registration");

        setData({
            Username: username,
            Password: psswrd,
            Role: role,
            // Id: new Date()
        });

        console.log(data, "data useState object in addUser.js");
    }

    const selectRole = (event) => {
        setRole(event.target.value);
        console.log(event.target.value, "role data value");
    }


    const registrationData = useSelector(state => state);
    console.log(registrationData, "registrationData value from useSelector in addUser.js");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegistrationRequest(data));
    }, [data]);



    return (
        <div className="registrationContainer">
            <div className="reg_border">
                <div>
                    <Link to="/login" className="lgnLnk">Login</Link>
                </div>
                <div className="registration">
                    <h1>Registration</h1>
                </div>
                <div>
                    <form className="formSection">
                        <section>
                            <p>UserName</p>
                            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="UserName" />
                        </section>
                        <section>
                            <p>Password</p>
                            <input onChange={(e) => setPsswrd(e.target.value)} value={psswrd} type="password" placeholder="UserName" />
                        </section>
                        <section>
                            <p>Role</p>
                            <select onClick={selectRole}>
                                <option value="admin">admin</option>
                                <option value="guest">guest</option>
                            </select>
                        </section>
                    </form>

                    {console.log(username, psswrd, role, "=> username + password + role")}
                    
                    <button onClick={submitBtnHandler} type="submit" className="sbmtBtn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default AddUser;