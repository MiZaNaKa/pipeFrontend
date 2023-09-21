import React,{useState} from 'react'
import {Text,ScrollView,View,Dimensions,TouchableOpacity,Image} from 'react-native'


function ListingPage({route}){
    const {id,name}=route.params
    return(
        <View>
            <Text>ListingPage</Text>
            {/* <Text>{name}</Text> */}
        </View>
    )
}

export default ListingPage