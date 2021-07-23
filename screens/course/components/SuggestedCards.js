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
        <TouchableOpacity style = {styles.container} onPress = {()=>onPressed()}>
            <View style = {{padding:10,flex:1,alignItems:'center'}}>
                <Text style ={{fontFamily:'Poppins-SemiBold',fontSize:12,marginBottom:10}}>{props.name}</Text>
                <Text style ={{fontFamily:'Poppins-Normal',fontSize:10,marginBottom:10}}>{props.progress} topics completed</Text>
                <View>
                    <View style = {{width:125,borderWidth:1,height:3,borderRadius:9 }}>
                    <View style={[StyleSheet.absoluteFill], {backgroundColor: props.color, width: eval(props.progress)*100 + "%",height:'100%'}}/>
                    </View>
                    {/* <View style = {{width:125,borderWidth:1,height:3 }}></View> */}
                </View>
                <TouchableOpacity style = {t.mT3}>
                    <View style = {{width:96,height:22,borderRadius:9,backgroundColor:'#F2F2F2',justifyContent:'center',alignItems:'center'}}>
                        <Text style = {{fontFamily:'Poppins-Normal',fontSize:9,color:props.color}}>Continue Course</Text>
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
    container:{
        width:'100%',
        height:120,
        borderWidth:1,
        borderRadius:14,
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    image:{
        width:130,
        height:120,
        borderRadius:14,
    }
})
