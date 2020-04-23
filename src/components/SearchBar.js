import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const SearchBar = ({termValue, onTermChange, OnTermSubmit }) => {
    return (
        <View style={styles.SearchBarContainerStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                placeholder="Search Here"
                style={styles.inputTextStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value={termValue}
                onChangeText={onTermChange}
                onEndEditing={OnTermSubmit}
                 />
        </View>)
}
const styles = StyleSheet.create({
    SearchBarContainerStyle: {
        flexDirection: 'row',
        backgroundColor:"#F0EEEE",
        borderRadius:5,
        marginHorizontal:20,
        marginTop: 10,
        height:50,
        marginBottom:5
    },
    inputTextStyle: {
        flex: 1,
        fontSize:18
    },
    iconStyle: {
        fontSize:35,
        marginHorizontal:15,
alignSelf:'center'

    }
});


export default SearchBar;