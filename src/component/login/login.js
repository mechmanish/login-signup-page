import React, { useState, useEffect } from "react";
import "./login.css";

import { getLoginInfoRequest } from "../../redux/loginValidation/loginValidation.action.js";
import { useDispatch, useSelector } from 'react-redux';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import { Link, withRouter } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router";

// import ListOfUsers from "../listOfUsers/listOfUsers";

const Login = (props) => {

    console.log(props, "props ki valuessss");

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPsswrd, setLoginPsswrd] = useState("");
    // const [loginData, setLoginData] = useState([]);

    

    const loginUsernameFill = (event) => {
        setLoginUsername(event.target.value);
    }

    const loginPsswrdFill = (event) => {
        setLoginPsswrd(event.target.value);
    }

    const loginBtnHandler = () => {

        console.log("Login btn clicked");

        dispatch(getLoginInfoRequest({username: loginUsername,
            password: loginPsswrd}));

    }

    const loginCredential = useSelector(state => state);
    console.log(loginCredential, "loginCredential from useSelector ki value in login.js");

    const dispatch = useDispatch();

    const userSuccess = loginCredential.loginReducerData.isSuccess

    console.log(userSuccess, "==>>>>userSuccess value");

    // let navi = useNavigate();

    useEffect(()=>{
        if(userSuccess){
            Swal.fire({                      //swal([[title], text, [icon],] options)
                title: 'Login Success!',
                text: 'To check the list of users, Click OK!',
                icon: 'success',
                showConfirmButton: true,
                confirmButtonText: "List of Users"
            }).then(value =>{
                props.history.push("/listOfUsers");
            })
        }
    },[userSuccess]);


    return (
        <div className="loginContainer">
            <div className="log_border">
                <div>
                    <Link to="/">Registration</Link>
                </div>
                <div className="login">
                    <h1>Login</h1>
                </div>
                <div>
                    <form className="formSection">
                        <section>
                            <p>Username</p>
                            <input onChange={loginUsernameFill} value={loginUsername} type="text" placeholder="Username" />
                        </section>
                        <section>
                            <p>Password</p>
                            <input onChange={loginPsswrdFill} value={loginPsswrd} type="password" placeholder="Password" />
                        </section>
                    </form>
                    <button onClick={loginBtnHandler} className="loginBtn">Login</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);