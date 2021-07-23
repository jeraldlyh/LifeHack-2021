import React from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss'


function WelcomeScreen({ navigation }) {
    return (
        <View style={[t.flex1, t.justifyCenter, t.alignCenter]} >
            <Text>welcome</Text>
        </View>
    )
};



export default WelcomeScreen;