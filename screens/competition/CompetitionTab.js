import React, { useState } from "react";
import { Text } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import CompetitionListScreen from "./CompetitionListScreen";
import { useNavigation } from "@react-navigation/native";
import LeaderboardScreen from "./LeaderboardScreen";

function CompetitionTab() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "first", title: "Battle" },
        { key: "second", title: "Leaderboards" },
    ]);

    const navigation = useNavigation();
    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <CompetitionListScreen navigation={navigation} />;
            case "second":
                return <LeaderboardScreen navigation={navigation} />;
        };
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={props =>
                <TabBar
                    {...props} style={{ paddingTop: 35, backgroundColor: "#EAB18E", fontFamily: "Poppins-Bold" }} indicatorStyle={{ backgroundColor: "grey" }}
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ fontFamily: "Poppins-Bold", textTransform: "uppercase", color: "white" }}>
                            {route.title}
                        </Text>
                    )}
                />
            }
        />
    )
};

export default CompetitionTab;