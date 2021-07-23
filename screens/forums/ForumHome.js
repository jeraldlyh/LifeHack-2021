import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView} from 'react-native'
import { Searchbar } from 'react-native-paper'
import { t } from "react-native-tailwindcss";
import { Icon } from 'react-native-elements/';
import Tab from '../course/components/Tab';
import { useNavigation,  } from '@react-navigation/core';
import Forum from '../home/components/Forum';


export default function ForumHome() {
    const navigation = useNavigation();
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const setOthersInactive = (number) => {
        for (let i = 1; i <= 6; i++) {
            if (i != number) {
                switch (i) {
                    case 1:
                        setActive1(false);
                        break;
                    case 2:
                        setActive2(false);
                        break;
                    case 3:
                        setActive3(false);
                        break;
                    case 4:
                        setActive4(false);
                        break;
                    
                }
            }
        }
    };
    const navigateTab = (number) => {
        switch (number) {
            case 1:
                setActive1(true);
                break;
            case 2:
                setActive2(true);
                break;
            case 3:
                setActive3(true);
                break;
            case 4:
                setActive4(true);
                break;
           
        }
        setOthersInactive(number);
    };
    return (
        <ScrollView>
            
            <Image source = {require("../../assets/forum/psleheader.png")} style = {styles.image}/>
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
                    Primary School Leaving Examination (PSLE)
                    </Text>
                </View>
                <View style = {[t.flexRow,t.wFull,t.justifyBetween,t.mT5]}>
                    <View style = {[{borderRadius:14}]}>
                        <Text style = {{color:'white'}}>5.5k members</Text>
                    </View>
                    <View>
                        <Text style = {{color:'white'}}>View forum</Text>
                    </View>
                </View>
                
            </View>
            <View style = {[t.p6,{backgroundColor:'white',width:'100%',marginTop:55,borderRadius:24,}]}>
                    
                    <Text style = {[t.mT2,{color:'black',fontFamily:'Poppins-Bold',fontSize:28}]}>Forums</Text>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={[t.wFull,t.flex,t.flexRow,t.mT5]}
                >
                    <Tab
                        text="Exams"
                        onPress={() => navigateTab(1)}
                        active={active1}
                        
                    />
                    <Tab
                        text="School Life"
                        onPress={() => navigateTab(2)}
                        active={active2}
                    />
                    <Tab
                        text="Internships"
                        onPress={() => navigateTab(3)}
                        active={active3}
                    />
                    <Tab
                        text="Music"
                        onPress={() => navigateTab(4)}
                        active={active4}
                    />
                   
                </ScrollView>
                <Searchbar style = {[t.mT5,t.mB5]}/>
                <TouchableOpacity onPress ={()=>console.log("hello")}>
                    <Forum header = {"GCE O-Level Examination"}  members = {"5k"} description = "Forum to post about your O-Levels knowledge, tips and resources" image = {"olevels"} name = "Forums"/>
                </TouchableOpacity>
                <Forum header = {"Mobile App Developers"} members = {"1.1k"} description = "Forum for mobile app developers to exchange tips and tricks" image = {"mobiledev"}/>
                <Forum header = {"GCE O-Level Examination"} members = {"5k"} description = "Forum to post about your O-Levels knowledge, tips and resources" image = {"olevels"}/>
                <Forum header = {"Mobile App Developers"} members = {"1.1k"} description = "Forum for mobile app developers to exchange tips and tricks" image = {"mobiledev"}/>

                </View>
                
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:229,
        position:'absolute'
    }
})
