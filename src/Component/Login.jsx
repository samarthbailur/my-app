import React, { useState, useEffect } from 'react';
import { useAuth } from "../Context/Auth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { authTokens } = useAuth();
    const navigate = useNavigate();
    const { setAuthTokens } = useAuth();

    const handelLogin = () => {
        if (userName !== "" && password !== "") {
            setAuthTokens(true);
            navigate('/home')
        } else {
            alert("Invalid credentials")
        }
    }

    useEffect(() => {
        if (!authTokens) {
            navigate('/')
        }
    },)



    return (
        <div className='containner'>
            <div>
                <div className='textInput'>
                    <input
                        className='textInputLogin'
                        type="text"
                        placeholder="UserName"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div>
                <div className='textInput'>
                    <input
                        className='textInputLogin'
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className='textInput'>
                    <button className='textInputButton' onClick={() => handelLogin()} >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;