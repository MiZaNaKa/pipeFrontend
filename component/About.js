import React,{useState} from 'react'
import {Text,ScrollView,View,Dimensions,Button,Image} from 'react-native'
import { DrawerActions } from '@react-navigation/native';


function About({ navigation }){
    return(
        <View>
            <Text>hello kkk about</Text>
            <Button
                title="Open drawer"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
        </View>
       
    )
}

export default About