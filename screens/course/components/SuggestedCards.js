import { CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import { t } from "react-native-tailwindcss";
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function SuggestedCards(props) {
    const navigation = useNavigation();
    const onPressed = () => {
        const name = props.name;

        if (name === "Java for Beginners") {
            navigation.navigate("Java");
        // } else if (name === "Trivia") {
        //     navigation.push("Trivia");
        // } else if (name === "News") {
        //     navigation.push("News");
        // } else if (name === "Community") {
        //     navigation.push("Community");
        // };
    };}

    return (
        <TouchableOpacity style = {styles.button} onPress = {()=>onPressed()}>
            <View style = {{padding:10,flex:1,alignItems:'left', marginLeft: 15}}>
                <Text style ={{fontFamily:'Poppins-SemiBold',fontSize:15,marginBottom:10}}>{props.name}</Text>
                <Text style ={{fontFamily:'Poppins-Normal',fontSize:13,marginBottom:10}}>{props.progress} topics completed</Text>
                <View>
                    <View style = {{width:125,height:4,borderRadius:9, backgroundColor: "#f8f8f8"}}>
                    <View style={[StyleSheet.absoluteFill], {backgroundColor: props.color, width: eval(props.progress)*100 + "%",height:'100%'}}/>
                    </View>
                    {/* <View style = {{width:125,borderWidth:1,height:3 }}></View> */}
                </View>
                <TouchableOpacity style = {t.mT3}>
                    <View style = {{width:120,height:22,borderRadius:10,backgroundColor:'#F2F2F2',justifyContent:'center',alignItems:'center'}}>
                        <Text style = {{fontFamily:'Poppins-Normal',fontSize:12,color:props.color}}>Continue Course</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {props.name === "Java for Beginners" ? (
                <Image source = {require("../../../assets/home/java.jpg")} style= {styles.image}/>
            ) : null}
            {props.name === "App Development" ? (
                <Image
                    source={require("../../../assets/home/appdev.jpg")}style=  {styles.image}
                />
            ) : null}
            {props.name === "GCE O-Level English" ? (
                <Image
                    source={require("../../../assets/home/oleveleng.jpeg")}style=  {styles.image}
                />
            ) : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   
    button: {
        marginBottom: 20,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:120,
        borderRadius: 25,
        alignSelf:'center',
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    image:{
        width:130,
        height:120,
        borderRadius:14,
    }
})
