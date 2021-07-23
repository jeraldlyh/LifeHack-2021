import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authentication/AuthStack";
import TabStack from "./tab/TabStack";
import { useAuth } from "../context/AuthContext";


const Root = createStackNavigator();

const RootStack = () => {
    // const { isLoggedIn } = useAuth();
    const isLoggedIn = true;


    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {
                isLoggedIn 
                    ? <Root.Screen name="Tab" component={TabStack} />
                    : <Root.Screen name="Auth" component={AuthStack}/>
            }
        </Root.Navigator>
    )
}

export default RootStack;