import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompetitionScreen from "./CompetitionScreen";
import CompetitionTab from "./CompetitionTab";


const Competition = createStackNavigator();

const CompetitionStack = () => {
    return (
        <Competition.Navigator screenOptions={{ headerShown: false }}>
            <Competition.Screen name="Tab" component={CompetitionTab} />
            <Competition.Screen name="Competition" component={CompetitionScreen} />
        </Competition.Navigator>
    );
};

export default CompetitionStack;