import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CourseStack from "../course/CourseStack";
import ForumStack from "../forums/ForumStack";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Home" component={HomeScreen} />
            <Home.Screen name="Courses" component = {CourseStack} />
            <Home.Screen name="Forums" component = {ForumStack} />
        </Home.Navigator>
    )
}

export default HomeStack;