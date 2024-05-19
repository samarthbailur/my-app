import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

const PrivateRoute = (props) => {
    const { Components } = props
    const navigate = useNavigate();
    const { authTokens } = useAuth();

    useEffect(() => {
        if (!authTokens) {
            navigate('/login')
        }
    },)

    return (
        <div>
            <Components />
        </div>
    )
}

export default PrivateRoute;