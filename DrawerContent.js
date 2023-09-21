import React, { useState,useEffect } from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Image,TouchableOpacity,View,Text } from 'react-native';
import User from "./image/user.png"
import CommonStyle from "./commonStyle/commonStyle"
import { NativeModules } from "react-native";
import jwtHelper from './jwtHelper/jwtHelper';

const DrawerContent = props => {
    const [count, setCount] = useState("");
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            var userInfo = await jwtHelper.UserInfo()
            setCount(userInfo)
        }
        fetchData()
            .catch(console.error);
    }, [])
    const logOut=async(props)=>{
        console.log(props)
        console.log(props.navigation)
        var logout=await jwtHelper.deleteUser()
        props.navigation.navigate('Login')
        NativeModules.DevSettings.reload();
    }


    return <View style={CommonStyle.drawerContent}>
            <Image source={User} style={CommonStyle.userLogo}/>
            <View style={CommonStyle.marginB}>
                {count ? <Text style={CommonStyle.textCenter}>{count.name}</Text>:null}
            </View>

            <View style={CommonStyle.marginB}>
                {count ? <Text style={CommonStyle.textCenter}>{count.email}</Text>:null}
            </View>

            {count ? 
                <DrawerContentScrollView {...props}>
                    
                    <DrawerItemList {...props} />

                    <DrawerItem label='PipeList' onPress={() => props.navigation.navigate('PipeList')} />
                    <DrawerItem label='CreatePipe' onPress={() => props.navigation.navigate('CreatePipe')} />
                    <DrawerItem label='Log Out' onPress={() => logOut(props)} />
                
                </DrawerContentScrollView>
                :
                <DrawerContentScrollView {...props}>
                    
                    <DrawerItemList {...props} />

                    <DrawerItem label='Login' onPress={() => props.navigation.navigate('Login')} />
                    <DrawerItem label='CreateAccount' onPress={() => props.navigation.navigate('CreateAccount')} />

                    
                
                </DrawerContentScrollView>
            }

            {/* <TouchableOpacity>
                <Text>Log Out</Text>
            </TouchableOpacity> */}

            
    </View>
}

export default DrawerContent;