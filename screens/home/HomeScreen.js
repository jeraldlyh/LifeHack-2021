import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import Options from "./components/Options";
import { ScrollView } from "react-native-gesture-handler";
import { t } from "react-native-tailwindcss";
import CourseOptions from "./components/CourseOptions";
import Forum from "./components/Forum";
import RecentCourses from "./components/RecentCourses";

function HomeScreen(props) {

    return (
        <ScrollView contentContainerStyle={[t.itemsCenter,t.wFull,{backgroundColor:'#FCFCFC'}]}>
            {/* <View style={styles.headerContainer}>
                <Image
                    source={require("../../assets/home/headerImage.png")}
                    style={styles.headerImage}
                />
                <Title fontSize={24} style={styles.headerTitle} />
            </View> */}

            <View style={[styles.guidingNav,  t.mT16]}>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
                    Hi John, what do you need?
                </Text>
                <View style={styles.navOptions}>
                    <Options name = "Courses"/>
                    <Options name = "Games"/>
                    <Options name = "Forums"/>
                </View>
                <View style={[styles.applicationStatus, t.mT12]}>
                    <View style={[styles.applicationHeader, t.itemsCenter,t.flex]}>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Recent Courses
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <RecentCourses
                            name="Java for beginners"
                            time = "5h 21m"
                        />
                        <RecentCourses
                            name="Nuclear Physics"
                            time = "5h 21m"
                        />
                    </ScrollView>
                </View>
                <View style={styles.applicationStatus}>
                    <View style={styles.applicationHeader}>
                        <View>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Courses you may be
                        </Text>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            interested in
                        </Text>
                        </View>
                        
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView style = {{height:230}} horizontal ={true} >
                        <CourseOptions name = "App Development" time = "3h 12m" owner = "Jayden" job = "Developer" tags = {["UI/UX","Development"]}/>
                        <CourseOptions name = "Data Analytics" time = "3h 12m" owner = "Lauren Smith" job = "Professor" tags = {["Machine Learning"]}/>
                        {/* <News header = {"13 new community COVID-19 cases in Singapore, including 6 unlinked; 4 imported cases"} time = {2} image = {"covid"}/>
                        <News header = {"New medical centres for migrant workers will provide medical, well-being support"} time = {18} image = {"migrantWorkers"}/>
                        <News header = {"New Covid-19 clusters in Henderson Crescent, CGH; 3 unlinked cases"} time = {18} image = {"cgh"}/> */}
                    </ScrollView>
                </View>
                <View style={styles.applicationStatus}>
                    <View style={styles.applicationHeader}>
                        <View>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            Forums you may be
                        </Text>
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                        >
                            interested in
                        </Text>
                        </View>
                        
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                                color: "#AEAEBF",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView >

                    <Forum header = {"GCE O-Levels Examination"} members = {"5k"} description = "Forum to post about your O-Levels knowledge, tips and resources" image = {"olevels"}/>
                    <Forum header = {"Mobile App Developers"} members = {"1.1k"} description = "Forum for mobile app developers to exchange tips and tricks" image = {"mobiledev"}/>

                        {/* {
                            quests
                            ? quests.map((quest, index) => {
                                return (
                                    <Quests
                                        key={index}
                                        action = {quest.action}
                                        title={quest.title}
                                        description={quest.description}
                                        time={quest.createdAt}
                                        color={quest.color}
                                        points={quest.points}
                                        image={quest.image}
                                    />
                                )
                            })
                            : null
                        } */}
                        {/* <Quests/>
                        <Quests/>
                        <Quests/> */}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: "100%",
        height: 140,
    },
    headerContainer: {
        width: "100%",
        height: 200,
    },
    headerTitle: {
        position: "absolute",
        left: 25,
        bottom: 70,
    },
    guidingNav: {
        width: "100%",
        padding: 35,
    },
    navOptions: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    applicationStatus: {
        width: "100%",
        marginTop: 30,
    },
    applicationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13,
        alignItems:'center'
    },
});

export default HomeScreen;
