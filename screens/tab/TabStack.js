import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from "../home/HomeStack";
import CompetitionStack from "../competition/CompetitionStack";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline'
                    } else if (route.name === 'Compete') {
                        iconName = focused
                            ? 'trophy'
                            : 'trophy-outline';
                    } else if (route.name === 'Notifs') {
                        iconName = focused
                            ? 'notifications'
                            : 'notifications-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    };

                    return <Ionicons name={iconName} size={size} color={focused ? "#2B2B2B" : "#AEAEB2"} />;
                },
            })}
            tabBarOptions={{
                labelStyle: {
                    fontFamily: "Poppins-Bold"
                },
                activeTintColor: "#2B2B2B",
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Compete" component={CompetitionStack} />
            {/* <Tab.Screen name="Notifs" />
            <Tab.Screen name="Profile" /> */}
        </Tab.Navigator>
    );
};

export default TabStack;