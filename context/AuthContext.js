import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "../database/firebaseDB";
import _ from "lodash";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AVATAR_URL = [
    "https://i.ibb.co/3FsT97Z/doctor.png",
    "https://i.ibb.co/Sxzbj94/designer.png",
    "https://i.ibb.co/t2nMrzL/woman.png",
    "https://i.ibb.co/GPBdCP6/boy.png",
];


function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                setCurrentUser(null)
            } else {
                setCurrentUser(user)
            }
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const loginUser = async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim())
    };

    const registerUser = async (username, email, password) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        firebase.firestore().collection("User")
            .doc(username)
            .set({
                _id: uuidv4(),
                registeredAt: new Date().getTime(),
                points: 0,
                enableNotification: false,
                questCompleted: 0,
                avatar: _.sample(AVATAR_URL),
                bio: "Add a bio here",
                interests: [],
            });
    };

    const logoutUser = async () => {
        return firebase.auth().signOut()
    };

    const value = {
        currentUser,
        loginUser,
        registerUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;