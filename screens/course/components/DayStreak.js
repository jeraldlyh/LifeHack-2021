import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import { t } from "react-native-tailwindcss";

export default function DayStreak(props) {
    return (
        <TouchableOpacity style = {styles.button}>
            <Image source = {require("../../../assets/icons/streak.png")} style = {{height:60,width:60}} />
            <View style = {[t.mL3]}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:12}}>
                    You're on a 3 day streak! 
                </Text>
                <Text style = {{fontSize:10, fontFamily:'Poppins-Normal',color:"#AEAEBF"}}>
                    Come back tomorrow to for +50 
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        width:308,
        height:81,
        borderRadius: 25,
        alignSelf:'center',
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
})
