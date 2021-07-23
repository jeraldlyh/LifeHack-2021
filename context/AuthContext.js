import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext();
export const useAuth = useContext(AuthContext);

function AuthProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const [username, setUsername] = useState("");

    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;