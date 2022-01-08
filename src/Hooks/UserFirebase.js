import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebae.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const UserFireBase = () => {
    // this is my data loading functionality...
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

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


    // This is my authentication functionality here....
    // called firebase initialize app
    initializeAuthentication();

    // google sign in funtionality
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider);
    }

    // google sign in funtionality
    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, githubProvider);
    }


    //coustom crete authrntication user
    // name, email, password, repassword
    const createCoustomUser = (email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //coustom sign in authentication....
    const createCoustomSignIn = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }

    console.log(user)


    //login user state persistance , observe whether user auth state changed or not....
    useEffect(() => {
        const auth = getAuth();
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                return () => setUser({});
            }
        });
        return () => unsubscriber()
    }, [user]);


    // sign out funtionality here
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    };


    return {
        courses,
        user,
        setUser,
        error,
        setError,
        logout,
        googleSignIn,
        githubSignIn,
        createCoustomUser,
        createCoustomSignIn
    }
}

export default UserFireBase;