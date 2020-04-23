import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from "react-native"
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) =>{
    const { resultId } = route.params;
    const [ result, setResult ] = useState(null);

    const searchResultById = async (id)=>{
        try{
           const response = await yelp.get(`/${id}`);

           console.log(response.data);
            setResult(response.data);
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        searchResultById(resultId)
    }, []);

    if (!result)
    return null;
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) =>photo}
            renderItem={({item})=>{
               return (<Image
                source= {{uri: item}}
                style={{height: 200, width:300}}
                />)
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;