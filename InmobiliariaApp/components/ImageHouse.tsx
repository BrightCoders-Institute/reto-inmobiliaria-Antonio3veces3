import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';


type ImageProps= {
    img: string;
    rating:number;
}
export default function ImageHouse(props: ImageProps): JSX.Element {
  return (
    <ImageBackground style={styles.imgHouse} source={{uri: props.img}}>
      <View style={styles.ratingContainer}>
        <Text>{props.rating}</Text>
      </View>
    </ImageBackground>
  );
}

const styles= StyleSheet.create({
    imgHouse: {
        height:'100%',
        width: '100%',
        alignSelf:'center',
        justifyContent: 'flex-end',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center'
    },
    ratingContainer:{
        backgroundColor:'#F3EB90',
        width: 65,
        height: 30,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 5
    }
})