import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";


function HomeScreen(props) {
    return (
        <View style={[t.flex1, t.justifyCenter, t.alignCenter]}>
            <Text>hi</Text>
        </View>
    );
}

export default HomeScreen;
