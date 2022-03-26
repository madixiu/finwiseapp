import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './components/Main'


const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <View style={styles.header}>
    <View style={styles.row}>
      <Image style={{ width: 15, height: 15,marginRight:5 }}
      source={require('./assets/Logo.png')}/>
      <Text style={styles.headerTitle}>FinWise</Text>
    </View>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
       <Stack.Screen name="Main" component={MainScreen} options={{headerShown:true,title: 'FinWise',headerTitle:props => <LogoTitle {...props} />}} />
       
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f4511e'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center'
  },
  headerTitle: {
    fontWeight: "500",
    fontSize: 17
  }
});
