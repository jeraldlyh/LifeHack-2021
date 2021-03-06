import React, { useEffect, useState } from 'react';
import AuthProvider from './context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from "react-native";
import * as Font from "expo-font";
import RootStack from './screens/RootStack';
import CourseStack from './screens/course/CourseStack';
import Loading from './components/Loading';
import HomeStack from './screens/home/HomeStack';
import CourseOptions from './screens/home/components/CourseOptions';
import HomeScreen from './screens/home/HomeScreen';
import CourseHome from './screens/course/CourseHome';
import Lesson from './screens/course/Lesson';
import { loadData } from "./database/loadData"


LogBox.ignoreAllLogs();

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            "Poppins-Normal": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
            "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
            "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf")
        });
        setIsLoaded(true);
    };

    useEffect(() => {       // Load default fonts
        loadFonts();
        loadData();
    }, [])

    return (
        isLoaded
            ? (
                <AuthProvider>
                    <NavigationContainer>
                        <RootStack />
                    </NavigationContainer>
                </AuthProvider>
            )
            : (
                <Loading />
            )
    );
}