import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './main/Home'
import ProfileScreen from './main/Profile'
import AddScreen from './main/Add'

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Home" labeled={true} backBehavior='none'>
             <Tab.Screen name="AddContainer" component={AddScreen}
                // listeners={({ navigation }) => ({
                    //     tabPress: event => {
                        //         event.preventDefault();
                //         navigation.navigate("Add")
                //     }
                // })}
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        )
                    }}
            />
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
             <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
        )

    }
}

export default Main
