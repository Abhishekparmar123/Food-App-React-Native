import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../component/ResultsList";

export default function HomeScreen(props){
    const [ term, setTerm] = React.useState("");
    const [searchApi, results, errorMessage] = useResults();

    console.log("Api Result : ...................");
    console.log(results[0]);

    const FilterResultsByPrice = (price) => {
        
        try{
            return results.filter( item => {
                return item.price == price;
            });
        }
        catch(err){
            console.log(err);
        }
    };

    return(
        <View style={{flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onSubmitText={() => searchApi(term)}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={{alignItems:'center'}}>
                    { errorMessage ? <Text style={{fontSize:20, color:'red'}}>{ errorMessage } </Text> : null}
                </View>
                <View>
                    <ResultsList 
                        header={'Cost Effective'} 
                        results={ FilterResultsByPrice('$') }
                        navigation={props.navigation}
                    />
                    <ResultsList 
                        header={'Bit Pricer'} 
                        results={ FilterResultsByPrice('$$')} 
                        navigation={props.navigation}
                    />
                    <ResultsList 
                        header={'Big Spender'} 
                        results={ FilterResultsByPrice('$$$')} 
                        navigation={props.navigation}    
                    />
                </View>
            </ScrollView>
        </View>
    );
}