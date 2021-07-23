import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { t } from "react-native-tailwindcss"

export default function App() {
    return (
        <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}
