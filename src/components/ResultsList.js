import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import ResultDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    console.log(results)
    if(!results.length){ return null }
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                       <ResultDetail item={item} ></ResultDetail>
                    )
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
  
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft:20
    },
});

export default ResultsList