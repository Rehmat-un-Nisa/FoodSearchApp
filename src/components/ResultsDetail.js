import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ResultDetail = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Show Business Search',
         {
            resultId: item.id
        })}
        style={styles.itemContainerStyle}>
            <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text style={styles.subTextStyle}>{item.rating} Stars, {item.review_count} Reviews</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    itemContainerStyle:{
        marginLeft:20
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginVertical:5,
        borderRadius: 5
    },
    nameStyle: {
        fontSize:18,
        fontWeight:'bold'
    },
    subTextStyle: {
      color: 'gray'

    }
});
export default ResultDetail;