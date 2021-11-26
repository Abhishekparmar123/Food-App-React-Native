import React from "react";
import { 
        View, 
        Text, 
        StyleSheet,
        TextInput 
    } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onSubmitText}) => {

    return(
        <View style={styles.background}>
            <View style={styles.search}>
                <Ionicons name="search-circle-sharp" size={40} color="white" />
            </View>
            <View style={styles.searchText}>
                <TextInput 
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onSubmitText}
                    style={styles.text} 
                    placeholder={"search"} 
                    placeholderTextColor={'white'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: '#f0EE',
        height: 50,
        borderRadius: 30,
        marginBottom:20
    },
    search:{
        flex:1,
        marginLeft: 10,
    },
    searchText:{
        flex:8,
    },
    text:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default SearchBar;