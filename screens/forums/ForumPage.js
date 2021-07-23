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
            <Image source = {require("../../assets/forum/olevel.png") } style = {{width:'110%',height:322,alignSelf:'center',position:'absolute'}}/>
            <View style={[t.selfStart,t.mL6,t.mR6,t.z10,{top:50}]}>
                <TouchableOpacity
                    style={[t.bgGray300,t.mT1,t.w14,t.h14,t.roundedFull,t.absolute,t.opacity50,t.itemsCenter,t.flex,t.justifyCenter]}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color="#000"
                    />
                </TouchableOpacity>
                <View style = {[t.mT12,{width:220}]}>
                    <Text style = {{fontSize:18,fontFamily:'Poppins-Bold',color:'white'}}>
                    GCE  O-Level Examinations
                    </Text>
                </View>
                <View style = {[t.flexRow,t.wFull,t.justifyBetween,t.mT5]}>
                    <View style = {[{borderRadius:14}]}>
                        <Text style = {{color:'white'}}>5.5k members</Text>
                    </View>
                    {/* <View>
                        <Text style = {{color:'white'}}>View forum</Text>
                    </View> */}
                </View>
                
            </View>
            <View style = {[{width:'100%',backgroundColor:'white',borderRadius:24,marginTop:55}]}>
                <View style = {{height:30}}/>


                    <Thread header ="Chinese Listening Comprehension 2021 experiences" upvote = "521" comment = "44"/>
                    <Thread header ="How to perform during examinations, overcome mental blocks" upvote = "322" comment = "71"/>
                    <Thread header ="Free resources for Mathematics and English practices" upvote = "265" comment = "32"/>
                    <Thread header ="Private tuition recommendations for Chinese" upvote = "109" comment = "22"/>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
