import 'react-native-gesture-handler';


import React from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './component/About';
import HomePage from './component/Home';
import ListingPage from './component/ListingPage';
import ProfilePage from './component/ProfilePage';
import PostFood from './component/PostFood/PostFoodContainer';

const Stack = createNativeStackNavigator();


const Logo=()=>{
  return(
    <Image source={require("./image/menu.png")} style={{width:50,height:50}} />
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen
          name="PostFood"
          component={PostFood}
          
          // options={{ title: 'My Home Screen',
          // headerLeft:()=>(<Logo/>),
          // headerRight:()=>(<Image source={require("./image/logo.png")} style={{width:50,height:50}} />) }} 
        />
        
        {/* <Stack.Screen 
          name="Details" 
          component={HomePage}  /> */}
        
         <Stack.Screen 
          name="Contact" 
          component={ListingPage}  />
        
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
});