import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseHome from "./CourseHome";
import JavaCourse from "./JavaCourse"
import Lesson from "./Lesson";

const Course = createStackNavigator();

const CourseStack = () => {
    return (
        <Course.Navigator screenOptions={{ headerShown: false }}>
            <Course.Screen name="CourseHome" component={CourseHome} />
            <Course.Screen name="Java" component={JavaCourse} />
            <Course.Screen name="Lesson" component={Lesson} />
        </Course.Navigator>
    )
}

export default CourseStack;