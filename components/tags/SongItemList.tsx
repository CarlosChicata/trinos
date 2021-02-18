/**
 * Purpose:
 *  define a item into songs list 
 * 
 */
import React from 'react';
import { ListItem } from 'react-native-elements';

import { SongType } from './type';


export default function SongItemList({idx, title, subtitle}: SongType){
    return (
        <ListItem key={idx}>
            <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
                <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}
