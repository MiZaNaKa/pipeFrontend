import React,{useState} from 'react'
import {Text,ScrollView,View,Dimensions,TouchableOpacity,Image,Button} from 'react-native'


function Home({navigation}){
    return(
        <View>
            <Text>This is home page</Text>
            <Button title='GOcONATC' onPress={()=>navigation.navigate('ListingPage',{id:'3353535',name:'Khin Khin Thant'})}/>
        </View>
    )
}

export default Home