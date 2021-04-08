import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FeedScreen from './main/Feed'
import ProfileScreen from './main/Profile'
import AddScreen from './main/Add'

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={true}>
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
            <Tab.Screen name="Feed" component={FeedScreen}
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
