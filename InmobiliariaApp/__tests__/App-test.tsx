/**
 * @format
 */

import 'react-native';
import React from 'react';
import {estatesList} from '../data/data.json'
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HousesList from '../components/HousesList';
import HouseItem, { House } from '../components/HouseItem';
import ImageHouse from '../components/ImageHouse';
import InfoHouse from '../components/InfoHouse';

const data: House[]= estatesList;

describe("Test create House components",()=>{
    it('Create Houses List', () => {
      renderer.create(<HousesList/>);
    });

    it('Create House Item', () => {
        const house= data[0]
      renderer.create(<HouseItem house={house}/>);
    });

    it('Create Image House component',()=>{
        const {img, rating}= data[0];
        renderer.create(<ImageHouse img={img} rating={rating} />)
    });

    it('Create Info House component',()=>{
        const house = data[0];
        renderer.create(<InfoHouse house={house} />)
    })
})
