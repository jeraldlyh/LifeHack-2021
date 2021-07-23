import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { t } from "react-native-tailwindcss";

export default function QandACard(props) {
    return (
        <View style = {[t.wFull, t.flexRow,t.justifyBetween,t.mT4]}>
            { props.type === 1 ? <Image source={require("../../../assets/profile/profile1.png")} style={styles.image} /> : null }
            { props.type === 2 ? <Image source={require("../../../assets/profile/profile2.png")} style={styles.image} /> : null }
            { props.type === 3 ? <Image source={require("../../../assets/profile/profile3.png")} style={styles.image} /> : null }
            <View style = {{width:220}}>
                <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:15}}> {props.header}</Text>
<Text style = {{fontFamily:'Poppins-Normal',fontSize:13,color:'#7A7A7C'}}>{props.description}

</Text>
            </View>
            <View>
                <View style = {t.flexRow}>
                    <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:13,color:"#8F8F8F"}}>{props.upvote}</Text>
                    <Icon style = {{marginLeft: 5}} name = "arrowup" type = "antdesign" size = {15} />
                </View>
                <View style = {t.flexRow}>
                    <Text style = {{fontFamily:'Poppins-SemiBold',fontSize:13,color:"#8F8F8F", marginTop: 5}}>{props.comment}</Text>
                    <Icon style = {{marginTop: 7, marginLeft: 5}} name = "comment" type = "evilicons" size = {15} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:39,
        height:39,
        borderRadius:100
    }
})
