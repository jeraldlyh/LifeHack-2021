import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseHome from "./CourseHome";

const Course = createStackNavigator();

const CourseStack = () => {
    return (
        <Course.Navigator screenOptions={{ headerShown: false }}>
            <Course.Screen name="CourseHome" component={CourseHome} />
        </Course.Navigator>
    )
}

export default CourseStack;