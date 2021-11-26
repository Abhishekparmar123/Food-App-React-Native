import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ header, results, navigation }) =>{

    if(!results.length){
        return null;
    }

    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{ header }</Text>
            </View>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={()=> navigation.navigate("Detail", { id: item.id })}>
                            <ResultsDetails 
                                result={ item }
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingLeft: 15,
        paddingBottom:10,
    },
    headerText:{
        fontSize:25,
        fontWeight: 'bold',
    },
    Text:{
        fontSize:20,
    },
    
});

export default ResultsList;
