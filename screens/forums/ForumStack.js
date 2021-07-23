import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForumHome from "./ForumHome";

const Forum = createStackNavigator();

const ForumStack = () => {
    return (
        <Forum.Navigator screenOptions={{ headerShown: false }}>
            <Forum.Screen name="ForumHome" component={ForumHome} />
            
        </Forum.Navigator>
    )
}

export default ForumStack;