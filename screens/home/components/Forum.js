import React from 'react';
import { View, StyleSheet,Image,Text, TouchableOpacity } from 'react-native';
import { t } from "react-native-tailwindcss";
import { useNavigation } from '@react-navigation/native';

function Forum(props) {
    const navigation = useNavigation();
    const onPressed = () => {
        const name = props.name;

        if (name === "Forums") {
            navigation.navigate("ForumPage");
        // } else if (name === "News") {
        //     navigation.push("News");
        // } else if (name === "Community") {
        //     navigation.push("Community");
        // };
    };}
    return (
        <TouchableOpacity style = {styles.container} onPress = {()=>onPressed()}>
             {/* {/* { props.image === "covid" ? <Image source={require("../../../assets/news/covid.png")} style={styles.image} /> : null } */}
            { props.image === "mobiledev" ? <Image source={require("../../../assets/home/mobiledev.png")} style={styles.image} /> : null }
            { props.image === "olevels" ? <Image source={require("../../../assets/home/olevels.jpg")} style={styles.image} /> : null } 
         
            <View style = {[t.wFull, {width:200,marginLeft:20, marginRight:20}]}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:15}}>{props.header}</Text>
                <Text style = {{fontFamily:'Poppins-Normal',fontSize:13}}>{props.members} members</Text>
                <Text style = {{fontFamily:'Poppins-Normal', fontSize:12, color:'#AEAEBF'}}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:120,
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
        borderRadius:14,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,  
    },
    image:{
        width:100,
        height:120,
        borderRadius:14
    }
})

export default Forum;