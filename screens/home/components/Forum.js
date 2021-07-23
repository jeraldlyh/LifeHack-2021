import React from 'react';
import { View, StyleSheet,Image,Text, TouchableOpacity } from 'react-native';
import { t } from "react-native-tailwindcss";
import { useNavigation } from '@react-navigation/native';

function Forum(props) {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style = {styles.container} >
             {/* {/* { props.image === "covid" ? <Image source={require("../../../assets/news/covid.png")} style={styles.image} /> : null } */}
            { props.image === "mobiledev" ? <Image source={require("../../../assets/home/mobiledev.png")} style={styles.image} /> : null }
            { props.image === "olevels" ? <Image source={require("../../../assets/home/olevels.jpg")} style={styles.image} /> : null } 
         
            <View style = {[t.wFull, {width:200,marginLeft:20}]}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:11}}>{props.header}</Text>
                <Text style = {{fontFamily:'Poppins-Normal',fontSize:10}}>{props.members} members</Text>
                <Text style = {{fontFamily:'Poppins-Normal', fontSize:10, color:'#AEAEBF'}}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:87,
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
        borderRadius:14,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
    },
    image:{
        width:100,
        height:87,
        borderRadius:14
    }
})

export default Forum;