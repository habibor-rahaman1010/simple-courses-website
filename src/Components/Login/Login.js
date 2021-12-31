import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/ContextAPI';



const Login = () => {
    const data = useContext(AuthContext)
    console.log(data)
    return (
        <div>
            <h2>This is my login page: { }</h2>

        </div>
    );
};

export default Login;