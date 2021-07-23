import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Leaderboard from "./Leaderboard";

const Course = createStackNavigator();

const LeaderboardStack = () => {
    return (
        <Course.Navigator screenOptions={{ headerShown: false }}>
            <Course.Screen name="Leaderboard" component={Leaderboard} />
        </Course.Navigator>
    )
}

export default LeaderboardStack;