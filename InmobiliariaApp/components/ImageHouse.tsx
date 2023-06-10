import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ImageProps = {
  img: string;
  rating: number;
};
export default function ImageHouse(props: ImageProps): JSX.Element {
  return (
    <ImageBackground style={styles.imgHouse} source={{uri: props.img}}>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={15} color={'#FFB60A'} />
        <Text style={styles.ratingTxt}>{props.rating}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgHouse: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3EB90',
    width: 65,
    height: 30,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  ratingTxt: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#7B5E28'
  }
});
