import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompetitionListScreen from "./CompetitionListScreen";
import CompetitionScreen from "./CompetitionScreen";


const Competition = createStackNavigator();

const CompetitionStack = () => {
    return (
        <Competition.Navigator screenOptions={{ headerShown: false }}>
            <Competition.Screen name="List" component={CompetitionListScreen} />
            <Competition.Screen name="Competition" component={CompetitionScreen} />
        </Competition.Navigator>
    );
};

export default CompetitionStack;