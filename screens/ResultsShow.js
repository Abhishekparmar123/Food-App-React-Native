import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import yelp from '../api/yelp';

const { width, height} = Dimensions.get('screen');

function ResultShow(props){

    const [images, setImages] = React.useState(null);
    const id = props.route.params.id;
    console.log('...............................................')
    console.log(images)

    const getImages = async (id) => {
        const response = await yelp.get(`/${id}`);
        setImages(response.data);
    };

    useEffect( () => {
        getImages(id);
    }, []);

    if(! images){
        return null;
    }

    return(
        <View style={{flex:1}}>
            {/* <View style={styles.header}> 
                <Text style={styles.title}>{ images.name }</Text>
            </View> */}
            <View style={{ flex:1, margin: 8 }}>
                <FlatList
                    data = {images.photos}
                    keyExtractor = {(photo) => photo}
                    renderItem = {( {item} ) => {
                        return(
                            <Image
                                source = {{ uri: item }}
                                style={styles.image}
                            />
                        )
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    image:{
        margin:10,
        width:width - 36,
        height: width * 0.5,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
});

export default ResultShow;
