import { CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function SuggestedCards(props) {
    return (
        <View style = {styles.container}>
            <View style = {{padding:10}}>
                <Text>Java for Beginners</Text>
            </View>
            <Image source = {require("../../../assets/home/java.jpg")} style = {styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:120,
        borderWidth:1,
        borderRadius:14,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:130,
        height:120,
        borderRadius:14,
        alignSelf:'baseline'
    }
})
