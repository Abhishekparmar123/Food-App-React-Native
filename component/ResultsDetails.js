import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const ResultsDetails = ( {result} ) =>{
    return(
        <View style={styles.box}>
            <View>
                <Image style={styles.image} source={{ uri: result.image_url}}/>
            </View>
            <Text style={styles.Text}>{ result.name }</Text>
            <Text style={styles.caption}>{result.rating} Stars , {result.review_count} Reviews.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box:{
        width:240,
        height:200,
        marginLeft:15,
    },
    Text:{
        fontSize:16,
        fontWeight:'bold',
    },
    image:{
        width:240,
        height:120,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    caption:{
        fontSize:16,
    }
});

export default ResultsDetails;
