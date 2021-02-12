/**
 * Purpose:
 *  main navigation in project
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SongManager from '../components/screens/SongManager';


const MainNavStack = createStackNavigator(); 


export default function AppNavigation(){
    return(
        <NavigationContainer>
            <MainNavStack.Navigator>
                <MainNavStack.Screen
                    name="Listado"
                    component={SongManager}
                />
            </MainNavStack.Navigator>
        </NavigationContainer>
    )
}