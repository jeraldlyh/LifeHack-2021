import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { t } from "react-native-tailwindcss";
import Categories from './components/Categories'
import DayStreak from './components/DayStreak'
import SuggestedCards from './components/SuggestedCards';

export default function CourseHome(props) {
    return (
        <View style = {styles.container}>
            <DayStreak/>
            <Text style = {{fontFamily:'Poppins-Bold', fontSize:28}}>
            Courses
            </Text>
            <View style = {{marginTop:10,backgroundColor:'#F4F4F4',height:34,width:'100%',borderRadius:10}}>
            </View>
            <View style={[styles.applicationHeader, t.itemsCenter,t.flex]}>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Categories
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
    
            <ScrollView horizontal= {true} style = {{height:110,padding:10}} contentContainerStyle = {{alignItems:'center'}} >
                <Categories name = "Math"/>
                <Categories name = "Science"/>
                <Categories name = "Grammar"/>
                <Categories name = "Coding"/>

            </ScrollView>

            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 , marginTop:20}}>
                Your Suggested
            </Text>

            <ScrollView>
                <SuggestedCards/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        paddingHorizontal:33,
    },
    applicationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13,
        alignItems:'center',
        marginTop:30
    },
})
