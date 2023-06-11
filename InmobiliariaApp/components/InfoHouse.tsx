import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {House} from './HouseItem';

type InfoHouseProps = {
  house: House;
};

export default function InfoHouse({house}: InfoHouseProps): JSX.Element {
  7;
  const [like, setLike] = useState(false);
  // const [colorLike, setColorLike] = useState('#499F68');
  let color = like? "#BC4749": "#499F68" 
  const onClickLike = () => {
    setLike(!like);
    // like ? setColorLike('#BC4749') : setColorLike('#499F68');
  };
  return (
    <>
      <Text style={styles.nameTxt}>{house.name}</Text>

      <View style={[styles.iconContainer, {marginTop: 7}]}>
        <Icon name="map-marker" size={20} />
        <Text style={styles.addressTxt}>{house.address}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <Icon name="bed" size={20} />
          <Text style={styles.detailTxt}>{house.rooms}</Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon name="bath" size={20} />
          <Text style={styles.detailTxt}>{house.baths}</Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon name="expand" size={20} />
          <Text style={styles.detailTxt}>{house.area} ft2</Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceTxt}>${house.price}/m</Text>
        <TouchableOpacity style={[styles.likeButton, {backgroundColor: color}]} onPress={onClickLike}>
          <Icon name="heart" size={16} color={'#FFFCF9'} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nameTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  addressTxt: {
    fontSize: 14,
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 18,
  },
  detailTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginLeft: 6,
  },
  priceTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  likeButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 90,
  },
});
