import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";


const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator screenOptions={{ headerShown: false }}>
            <Auth.Screen name="Welcome" component={WelcomeScreen} />
            <Auth.Screen name="Login" component={LoginScreen} />
            <Auth.Screen name="Register" component={RegisterScreen} />
        </Auth.Navigator>
    )
}

export default AuthStack;