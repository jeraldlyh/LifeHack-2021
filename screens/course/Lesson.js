import React,{useState} from 'react'
import { View, StyleSheet, Button,Text,Image, ScrollView, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Icon } from "react-native-elements";
import { t } from "react-native-tailwindcss";
import Tab from './components/Tab';
import QandACard from './components/QandACard';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export default function Lesson(props) {
    const navigation = useNavigation();
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const setOthersInactive = (number) => {
        for (let i = 1; i <= 2; i++) {
            if (i != number) {
                switch (i) {
                    case 1:
                        setActive1(false);
                        break;
                    case 2:
                        setActive2(false);
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
            
        }
        setOthersInactive(number);
    };

  return (
    < ScrollView contentContainerStyle={[t.p10,t.itemsCenter,{backgroundColor:'#FCFCFC'}]}>
        <TouchableOpacity style = {[t.mT5,{alignSelf:'flex-start',borderRadius:20,width:44,height:44,backgroundColor:'#A5A5A5',justifyContent:'center',alignItems:'center'}]} onPress = {()=>navigation.pop()}>
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='white'
                        size = {30}
                    />
            </TouchableOpacity>

        <Text style = {{fontFamily:'Poppins-Bold',fontSize:21}}>Course Detail</Text>
      <Video
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
       
      />
      <Text style = {[{fontSize:25,fontFamily:'Poppins-Bold',alignSelf:'flex-start'},t.mT5]}>Conditions and loops</Text>
      <View style = {[{flexDirection:'row',alignSelf:'flex-start'},t.mT5]}>
          <Image source = {require("../../assets/home/laurensmith.jpg")} style = {styles.profileImage} />
          <View style = {t.mL3}>
              <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:16}}>
                  Lauren Smith
              </Text>
              <Text style = {{fontFamily:'Poppins-Normal',fontSize:13,color:"#7A7A7C"}}>
                  Professor
              </Text>
          </View>
      </View>
      <Text style = {[t.mT3,t.wFull,{fontSize:15,fontFamily:'Poppins-Normal',color:"#7A7A7C"}]}>
        In this lesson, you will learn about different
        kinds of loops (for loops, while loops, do while 
        loops) and conditional statement (if and while
        statements)
      </Text>
      <View
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={[t.wFull,t.flex,t.flexRow,t.mT5]}
                >
                    <Tab
                        text="Q & A"
                        onPress={() => navigateTab(1)}
                        active={active1}
                        
                    />
                    <Tab
                        text="Announcements"
                        onPress={() => navigateTab(2)}
                        active={active2}
                    />
                   
                </View>
        <QandACard type = {1} header = "For those who don't understand nested for loops" description = "A nested loop is a loop within a loop, an inner loop within the body of an outer ..."
        upvote = {521} comment = {44}/>
        <QandACard type = {2} header = "Help needed for Exercise 1" description = "Hello all! I managed to solve the first part of the question, but I was unable to do"
        upvote = {31} comment = {23}/>
        <QandACard type = {3} header = "My solution for Exercise 4" description = "I have looked through the Q&A section and realised I took a different approach"
        upvote = {30} comment = {28}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    
    video:{
        marginTop:20,
        height:204,
        width:'100%',
        borderRadius:14
    },
    profileImage:{
        height:45,
        width:45,
        borderRadius:100
    }
})
