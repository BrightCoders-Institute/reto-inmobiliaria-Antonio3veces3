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
  price: number;
  rating: number;
  img: string;
};

export default function HouseItem({house}: ItemProps): JSX.Element {
  return (
    <TouchableOpacity>
        <View style={styles.itemContainer}>
            <View style={styles.imgContainer}>
             <ImageHouse img={house.img} rating={house.rating} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.nameTxt}>{house.name}</Text>
                <Text>{house.address}</Text>
                <Text>{house.rooms} || {house.baths} || {house.area}</Text>
                <Text>{house.price}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const styles= StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 140,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: '#F0F7FA'
    },
    imgContainer:{
        borderWidth: 1,
        height: 120,
        width: 120,
        alignSelf:'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 10
        
    },
    infoContainer:{
        borderWidth: 1,
        flexDirection: 'column',
        marginLeft: 15,
        width: 205
    },
    nameTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    }
})
