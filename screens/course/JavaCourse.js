import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Icon } from 'react-native-elements';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { t } from "react-native-tailwindcss";

export default function JavaCourse(props) {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={[t.itemsCenter,t.wFull,{backgroundColor:'#FCFCFC'}]}>
            <TouchableOpacity style = {{alignSelf:'flex-start',borderRadius:20,width:44,height:44,backgroundColor:'#A5A5A5',justifyContent:'center',alignItems:'center',marginTop:50,marginLeft:33}} onPress = {()=>navigation.pop()}>
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='white'
                        size = {30}
                    />
            </TouchableOpacity>
            <View style = {styles.container}>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontFamily:'Poppins-SemiBold', fontSize:21}}>
                        Course Detail
                    </Text>
                </View>

                <Image
                    source={require("../../assets/course/java.jpg")} style={styles.image}
                />

                <Text style = {{fontFamily:'Poppins-Bold', fontSize:26, marginTop: 20, marginBottom: 10}}>
                    Java for Beginners
                </Text>

                <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <Image
                            source={require("../../assets/home/laurensmith.jpg")} style={styles.profile}
                        />
                        <View style={{marginLeft: 20}}>
                            <Text style = {{fontFamily:'Poppins-Bold', fontSize:15}}>Lauren Smith</Text>
                            <Text style = {{fontFamily:'Poppins-Normal', fontSize:14, color: "#AEAEBF"}}>Professor</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:"row"}}>
                            <Image
                                source={require("../../assets/course/time.png")} style={styles.icon}
                            />
                            <Text style = {{fontFamily:'Poppins-Normal', fontSize:14, color: "#AEAEBF"}}>5h 21mins</Text>
                        </View>
                        <Image
                            source={require("../../assets/course/rating.png")} style={styles.rating}
                        />
                    </View>
                </View>

                <Text style = {{fontFamily:'Poppins-Normal', fontSize:15, color: "#7A7A7C", marginTop: 20}}>
                    In this course I’ll show the step-by-step process to mastering the Java programming 
                    langauge. This course is beginner-friendly so do not worry if you do not have any prior coding experience.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Coding</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Development</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style = {{fontFamily:'Poppins-Bold', fontSize:18}}>Lessons</Text>
                    <Text style = {{fontFamily:'Poppins-Normal', fontSize:18, marginLeft: 25, color: "#595959"}}>Exercises</Text>
                </View>

                <View style={{marginTop: 10, borderBottomColor: '#A5A5A5', borderBottomWidth: 1}}/>

                <View style={{flexDirection:"row", marginTop: 10, justifyContent: "space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.lessonNo}>01</Text>
                        <View> 
                            <Text style={styles.timing}>7 mins</Text>
                            <Text style={styles.title}>Introduction</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require("../../assets/course/play.png")} style={styles.profile}/>
                    </View>
                </View>

                <View style={{flexDirection:"row", marginTop: 10, justifyContent: "space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.lessonNo}>02</Text>
                        <View> 
                            <Text style={styles.timing}>18 mins</Text>
                            <Text style={styles.title}>Variables and Strings</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require("../../assets/course/play.png")} style={styles.profile}/>
                    </View>
                </View>

                <TouchableOpacity style={{flexDirection:"row", marginTop: 10, justifyContent: "space-between"}} onPress = {()=>navigation.navigate("Lesson")}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.lessonNo}>03</Text>
                        <View> 
                            <Text style={styles.timing}>40 mins</Text>
                            <Text style={styles.title}>Conditions and Loops</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require("../../assets/course/play.png")} style={styles.profile}/>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:"row", marginTop: 10, justifyContent: "space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.lessonNo}>04</Text>
                        <View> 
                            <Text style={styles.timing}>40 mins</Text>
                            <Text style={styles.title}>1D and 2D Arrays</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require("../../assets/course/play.png")} style={styles.profile}/>
                    </View>
                </View>

                <View style={{flexDirection:"row", marginTop: 10, justifyContent: "space-between"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.lessonNo}>05</Text>
                        <View> 
                            <Text style={styles.timing}>52 mins</Text>
                            <Text style={styles.title}>Classes, methods, objects</Text>
                            <Text style={styles.title}>and Interfaces</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require("../../assets/course/play.png")} style={styles.profile}/>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    lessonNo: {
        fontFamily:'Poppins-Bold', 
        fontSize:40,
        color: "#C2C2C2",
        marginRight: 20,
    },
    timing: {
        marginTop: 5,
        fontFamily:'Poppins-Normal', 
        fontSize:14,
        color: "#7A7A7C"
    },
    title: {
        fontFamily:'Poppins-Bold', 
        fontSize:16,
        color: "#595959"
    },
    container:{
        marginTop:50,
        paddingHorizontal:33,
    },
    image: {
        marginTop: 25,
        height: 210,
        width: "100%",
        borderRadius: 25
    },
    profile: {
        height: 50,
        width: 50,
    },
    rating: {
        marginTop:5,
        height: 10,
        width: 100,
    },
    icon: {
        margin: 5,
        height: 12,
        width: 12,
    },
    button: {
        height: 30,
        borderRadius: 14,
        marginTop: 12,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    text: {
        margin: 5,
        marginRight: 10,
        marginLeft: 10,
        color: "#7E7E92"
    }
})