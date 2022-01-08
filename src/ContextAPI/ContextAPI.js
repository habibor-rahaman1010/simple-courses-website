import React, { createContext } from 'react';
import UserFireBase from '../Hooks/UserFirebase';


export const AuthContext = createContext();

const ContextAPI = ({ children }) => {
    const allContext = UserFireBase();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;