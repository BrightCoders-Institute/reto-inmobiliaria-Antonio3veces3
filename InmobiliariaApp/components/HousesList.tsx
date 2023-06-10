import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { estatesList } from '../data/data.json';
import HouseItem, { House } from './HouseItem';

const DATA: House[]= estatesList;

export default function HousesList(): JSX.Element {
    const [selectedID, SetSelectedID] = useState<number>()

    const renderItem=({item}:{item: House})=>{
        return (
            <HouseItem house={item}/>
        )
    };

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}