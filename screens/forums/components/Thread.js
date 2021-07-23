import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
export default function Thread(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {{fontSize:14,fontFamily:'Poppins-SemiBold'}}>{props.header}</Text>
            </View>
            <View style = {{flexDirection:'row',width:'100%',marginLeft:19}}>
                <View style = {{flexDirection:'row',alignItems:'center',borderRadius:14,backgroundColor:'white',marginRight:10}}>
                    <Text style = {{fontFamily:'Poppins-SemiBold',color:'#8F8F8F',fontSize:13}}>  {props.upvote} </Text> 
                    <Icon name = "arrowup" type = "antdesign" size = {12} />
                </View>
                <View style = {{flexDirection:'row',alignItems:'center',borderRadius:14,backgroundColor:'white',}}>
                    <Text style = {{fontFamily:'Poppins-SemiBold',color:'#8F8F8F',fontSize:13}}>  {props.comment} </Text>
                    <Icon name = "comment" type = "evilicons" size = {15} />
                    <Text>  </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:105,
        width:329,
        backgroundColor:'#F2F2F2',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:14,
        marginBottom:30
    },
    header:{
        width:310,
        height:42,
    }
})
