import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { t } from "react-native-tailwindcss";
import { Icon } from "react-native-elements";


function CourseOptions(props) {
    return (
        <View style = {styles.container}>
            
            {props.name === "App Development" ? (
                <Image source = {require("../../../assets/home/appdev.jpg")} style= {styles.image}/>
            ) : null}
            {props.name === "Data Analytics" ? (
                <Image
                    source={require("../../../assets/home/dataanalytics.jpg")}style=  {styles.image}
                />
            ) : null}

            <Text style = {[t.mL3,t.mT3,{fontFamily:'Poppins-SemiBold',fontSize:11}]}>{props.name}</Text>
            <View style = {[t.mL3,t.itemsCenter,{flexDirection:'row'}]}>
            <Icon name="schedule" type="material" color="#AEAEBF" size = {12}/>
            <Text style = {{fontFamily:'Poppins-Normal',fontSize:10,color:'#AEAEBF'}}> {props.time}</Text>
            </View>
            <View style = {[t.mL3,t.mT3,{flexDirection:'row' ,marginTop:5}]}>
            {props.tags? props.tags.map((tags, index) => {
                                return (
                                    <View key = {index} style = {{borderRadius:14,borderWidth:0.5,height:15,alignItems:'center',justifyContent:'center', marginRight:5}}>
                    <Text style = {{fontFamily:'Poppins-Normal',fontSize:9,marginHorizontal:5,color:'#7E7E92'}}>{tags}</Text>
                </View>
                                )
                            }):
                            null}
                            
                    
                
            </View> 
            <View style = {[t.flexRow,t.mL3,t.mT3]}>
            {props.owner === "Jayden" ? (
                <Image
                    source={require("../../../assets/home/jayden.jpg")} style = {styles.profileImage}
                />
            ) : null}
            {props.owner === "Lauren Smith" ? (
                <Image
                    source={require("../../../assets/home/laurensmith.jpg")} style = {styles.profileImage}
                />
            ) : null}
                <View style = {[t.mL2]}>
                    <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:11}}>
                        {props.owner}
                    </Text>
                    <Text style= {{fontFamily:'Poppins-Normal',fontSize:10, color:'#AEAEBF'}}>
                        {props.job}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:165,
        height:200,
        borderRadius:14,
        marginRight:30,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
    },
    image:{
        width:'100%',
        height:83,
        borderRadius:14
    },
    profileImage:{
        borderRadius:287.5,
        width:30,
        height:30,
        resizeMode:'contain'
    }
})

export default CourseOptions;