import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForumHome from "./ForumHome";
import ForumPage from "./ForumPage";

const Forum = createStackNavigator();

const ForumStack = () => {
    return (
        <Forum.Navigator screenOptions={{ headerShown: false }}>
            <Forum.Screen name="ForumHome" component={ForumHome} />
            <Forum.Screen name="ForumPage" component={ForumPage} />
        </Forum.Navigator>
    )
}

export default ForumStack;