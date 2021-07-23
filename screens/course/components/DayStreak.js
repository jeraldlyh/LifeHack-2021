import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { t } from "react-native-tailwindcss";

export default function DayStreak(props) {
    return (
        <View style = {[styles.container, t.roundedLg, t.bgWhite, t.shadowMd, t.shadowBlack]}>
            <Image source = {require("../../../assets/icons/streak.png")} style = {{height:60,width:60}} />
            <View style = {[t.mL3]}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:12}}>
                    You're on a 3 day streak! 
                </Text>
                <Text style = {{fontSize:10, fontFamily:'Poppins-Normal',color:"#AEAEBF"}}>
                    Come back tomorrow to for +50 
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        width:308,
        height:81,
        alignSelf:'center',
        marginBottom:30
    }
})
