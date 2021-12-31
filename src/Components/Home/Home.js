import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/ContextAPI';

const Home = () => {
    const data = useContext(AuthContext)
    console.log(data)
    return (
        <div>
            <h1>This is home page</h1>

        </div>
    );
};

export default Home;