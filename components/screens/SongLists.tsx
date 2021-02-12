/**
 * Purpose:
 *  component of main song list component
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function SongList(){
    return (
        <View style={styles.container}>
            <Text>Testing Song List</Text>
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