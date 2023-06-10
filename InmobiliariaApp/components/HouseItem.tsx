import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';
import ImageHouse from './ImageHouse';

type ItemProps= {
   house: House;
}


export type  House=  {
  id: number;
  name: string;
  address: string;
  rooms: number;
  baths: number;
  area: number;
  cost: number;
  rating: number;
  img: string;
};

export default function HouseItem({house}: ItemProps): JSX.Element {
  return (
    <TouchableOpacity>
        <View style={styles.containerItem}>
            <View style={styles.imgContainer}>
             <ImageHouse img={house.img} rating={house.rating} />
            </View>
            <Text>{house.address}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles= StyleSheet.create({
    containerItem: {
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        height: 140,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 5
    },
    imgContainer:{
        borderWidth: 1,
        borderStyle: 'solid',
        height: 120,
        width: 120,
        alignSelf:'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 10
        
    },
    
})
