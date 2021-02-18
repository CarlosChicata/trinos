/**
 * Purpose:
 *  component of main song list component
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SongItemList from '../tags/SongItemList';


export default function SongManager(){
    return (
        <View style={styles.container}>
            <Text>Testing Song List</Text>
            <SongItemList 
                title="Hola que tal?" 
                subtitle="tesitng" 
                idx={1}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center'
    }
});