import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authentication/AuthStack";
import TabStack from "./tab/TabStack";
import { useAuth } from "../context/AuthContext";


const Root = createStackNavigator();

const RootStack = () => {
    const { currentUser, } = useAuth();

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {
                currentUser
                    ? <Root.Screen name="Tab" component={TabStack} />
                    : <Root.Screen name="Auth" component={AuthStack}/>
            }
        </Root.Navigator>
    )
}

export default RootStack;