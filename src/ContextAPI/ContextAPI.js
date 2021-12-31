import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const ContextAPI = ({ children }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const API = 'https://raw.githubusercontent.com/Web-Developer-Hub/courses-website/master/public/Data/data.JSON';
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data === null) {
                    return null
                }
                else {
                    setCourses(data)
                }
            });
    }, []);

    return (
        <AuthContext.Provider value={courses}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;