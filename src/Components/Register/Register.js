import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/ContextAPI';



const Register = () => {
    const data = useContext(AuthContext);
    const z = [];
    for (const x of data) {
        if (z.length < 4) {
            z.push(x)
        }
    }


    return (
        <div>
            <h2>This is my register page : {z.map((d) => <p key={d.id}>{d.title}</p>)}</h2>
        </div>
    );
};

export default Register;