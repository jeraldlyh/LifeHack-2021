import React from 'react'
import { ScrollView, StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import { t } from "react-native-tailwindcss";
import { Icon } from 'react-native-elements/';
import Thread from './components/Thread';
import { useNavigation } from '@react-navigation/native';

export default function ForumPage() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <Image source = {require("../../assets/forum/olevel.png") } style = {{width:'110%',alignSelf:'center',position:'absolute'}}/>
            <View style={[t.selfStart,t.mL6,t.mR6,t.z10,{top:50},]}>
                <TouchableOpacity
                    style={[t.bgGray300,t.mT1,t.w12,t.h12,t.roundedFull,t.absolute,t.opacity50,t.itemsCenter,t.flex,t.justifyCenter]}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color="#000"
                    />
                </TouchableOpacity>
                <View style = {[t.mT12,{width:220}]}>
                    <Text style = {{fontSize:18,fontFamily:'Poppins-Bold',color:'white', marginTop: 15}}>
                    GCE  O-Level Examinations
                    </Text>
                </View>
                <View style = {[t.flexRow,t.wFull,t.justifyBetween,t.mT5]}>
                    <View style = {[{borderRadius:14, marginBottom: 10}]}>
                        <Text style = {{color:'white'}}>5.5k members</Text>
                    </View>
                    {/* <View>
                        <Text style = {{color:'white'}}>View forum</Text>
                    </View> */}
                </View>
                
            </View>


            
            <View style = {[{width:'100%',backgroundColor:'white',borderRadius:26,marginTop:55}]}>
                <View style = {styles.container}>
                    <View style = {{flexDirection:"row", justifyContent: "space-between", marginTop: 20}}>
                        <View>
                            <Text style = {styles.header}>Virtual Study</Text>
                            <Text style = {styles.header}>Sessions</Text>
                        </View>
                        <View style = {styles.button}>
                            <Text style = {{fontFamily:'Poppins-SemiBold',color:'#8F8F8F',fontSize:13, margin: 5}}>Create Event</Text> 
                        </View>
                    </View>

                    <View style = {styles.container2}>
                        <View>
                            <Text style = {styles.text}>Fiona Ng is holding a virtual study session at 1pm</Text> 
                            <View style = {styles.button2}>
                                <Text style = {{fontFamily:'Poppins-SemiBold',color:'#8F8F8F',fontSize:13, margin: 5}}>View more</Text> 
                            </View>
                        </View>
                    </View>
                    <View style = {styles.container2}>
                        <View>
                            <Text style = {styles.text}>Jon Lim is holding a virtual study session at 6pm</Text> 
                            <View style = {styles.button2}>
                                <Text style = {{fontFamily:'Poppins-SemiBold',color:'#8F8F8F',fontSize:13, margin: 5}}>View more</Text> 
                            </View>
                        </View>
                    </View>

                </View>


                <View style = {{height:35}}/>
                    <Thread header ="Chinese Listening Comprehension 2021 experiences" upvote = "521" comment = "44"/>
                    <Thread header ="How to perform during examinations, overcome mental blocks" upvote = "322" comment = "71"/>
                    <Thread header ="Free resources for Mathematics and English practices" upvote = "265" comment = "32"/>
                    <Thread header ="Private tuition recommendations for Chinese" upvote = "109" comment = "22"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        height:300,
        width:329,
        backgroundColor:'#F0DFD4',
        alignSelf:'center',
        justifyContent: "space-between",
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },

    container2:{
        justifyContent: 'Center',
        marginBottom: 15,
        height:100,
        width: 280,
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent: "space-between",
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },

    header: {
        fontSize:18,
        fontFamily:'Poppins-SemiBold', 
        marginLeft: 20
    },

    button: {
        flexDirection:'row',
        alignItems:'center', 
        justifyContent: 'center', 
        borderRadius:14,
        backgroundColor:'white',
        marginRight:10, 
        height: 25, 
        width: 110
    },

    button2: {
        flexDirection:'row',
        alignItems:'center', 
        justifyContent: 'center', 
        borderRadius:14,
        backgroundColor:'#F0DFD4',
        marginLeft:15, 
        height: 25, 
        width: 110
    },

    text: {
        fontFamily:'Poppins-SemiBold',
        color:'#424242',
        fontSize:14, 
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 8
    }

})
