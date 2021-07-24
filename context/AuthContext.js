import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "../database/firebaseDB";
import _ from "lodash";
import { getProfile } from "../database/actions/Profile";
import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AVATAR_URL = [
    "https://i.ibb.co/L6rGpzJ/lily.jpg",
    "https://i.ibb.co/sRtWHnD/theresa.jpg",
    "https://i.ibb.co/54QxqQk/jerald.png",
    "https://i.ibb.co/ZBz5JdW/nicholas.png",
];


function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentProfile, setCurrentProfile] = useState(null)

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

    useEffect(() => {
        if (currentUser) {
            retrieveProfile(currentUser.displayName)
        }
    }, [currentUser])

    const retrieveProfile = async (username) => {
        setLoading(true)
        const profile = await getProfile(username)
        if (profile) {
            setCurrentProfile(profile)
        }
        setLoading(false)
    }

    const loginUser = async (email, password) => {
        setLoading(true)
        await firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim())
        setLoading(false)
    };

    const registerUser = async (username, email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => userCredential.user.updateProfile({
                displayName: username
            })).then(() => {
                firebase.firestore().collection("User")
                    .doc(username)
                    .set({
                        _id: uuidv4(),
                        registeredAt: new Date().getTime(),
                        currency: 1000,
                        enableNotification: false,
                        gamesPlayed: 0,
                        avatar: _.sample(AVATAR_URL),
                        bio: "Add a bio here",
                        role: "Student",
                        interests: [],
                    });
            });
    };

    const logoutUser = async () => {
        return firebase.auth().signOut()
    };

    const value = {
        currentUser,
        currentProfile,
        loginUser,
        registerUser,
        logoutUser,
        retrieveProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;