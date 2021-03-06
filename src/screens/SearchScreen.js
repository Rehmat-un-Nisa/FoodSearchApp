import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [ searchApi, results, errorMsg ] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
        return (
        <>
        <SearchBar
            termValue={term}
            OnTermSubmit={() =>searchApi(term)}
            onTermChange={newTerm => setTerm(newTerm)} />
         {errorMsg ? <Text>{errorMsg}</Text> : null} 
         <ScrollView>
         <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
         <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
         <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
         </ScrollView>
    </>
    );
}
const styles = StyleSheet.create({

});

export default SearchScreen;