import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ImageHouse from './ImageHouse';
import InfoHouse from './InfoHouse';

type ItemProps = {
  house: House;
};
export type House = {
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
          <InfoHouse house={house} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 140,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#F0F7FA',
  },
  imgContainer: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    width: 205,
  },
});
