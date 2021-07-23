import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler'
import { t } from "react-native-tailwindcss";
import Categories from './components/Categories'
import DayStreak from './components/DayStreak'
import SuggestedCards from './components/SuggestedCards';

export default function CourseHome(props) {
    const navigation = useNavigation();
    return (
        <ScrollView style = {styles.container}>
            <TouchableOpacity style = {{alignSelf:'flex-start',borderRadius:20,width:44,height:44,backgroundColor:'#A5A5A5',justifyContent:'center',alignItems:'center',marginBottom:20}} onPress = {()=>navigation.pop()}>
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='white'
                        size = {30}
                    />
            </TouchableOpacity>
            <DayStreak/>
            <Text style = {{fontFamily:'Poppins-Bold', fontSize:28}}>
            Courses
            </Text>
            <View style = {{marginTop:10,backgroundColor:'#F4F4F4',height:34,width:'100%',borderRadius:10,alignItems:'center',flexDirection:'row'}}>
                <Icon name='ios-search-outline'
                        type='ionicon'
                        color='#B8B0B0'
                        size = {20} style = {t.mL3}/>
                        <Text style = {[t.mL3,{fontFamily:'Poppins-Normal',fontSize:17,color:'#A1A1A1'}]}>
                            Search
                        </Text>
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

            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 , marginTop:20,marginBottom:20}}>
                Your Suggested
            </Text>

            <ScrollView>
                <SuggestedCards progress = "17/25" color = "#2593B6" name = "Java for Beginners" />
                <SuggestedCards progress = "11/25" color = "#0B14EF" name = "App Development"/>
                <SuggestedCards progress = "17/25" color = "#037A25" name = "GCE O-Level English"/>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        paddingHorizontal:33,
        marginBottom:20,
    },
    applicationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13,
        alignItems:'center',
        marginTop:30
    },
})
