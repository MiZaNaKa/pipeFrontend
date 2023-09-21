import React, { useState,useEffect } from "react";
import { Image,TouchableOpacity } from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerContent from './DrawerContent';
import CreatePipe from './component/CreatePipe/CreatePipeContainer';
import PipeList from './component/PipeList/PipeListContainer';
import Main from './component/DetailPipe/DetailPipeContainer';
import InsertPipe from './component/InsertPipe/InsertPipeContainer';
import ApplicationPage from './component/ApplicationPage/ApplicationPage';
import Login from './component/Login/LoginContainer';
import CreateAccount from './component/CreateAccount/CreateAccountContainer';

import Ads from './component/Ads';
import jwtHelper from './jwtHelper/jwtHelper';

import Form from './component/Testing/form';

import {navigationRef} from './RootNavigation';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();





const Logo=()=>{
    
    return(
        <TouchableOpacity onPress={() => DrawerActions.openDrawer()}>
            <Image source={require("./image/menu.png")} style={{width:50,height:50}} />
        </TouchableOpacity>
      
    )
}

// class HomeStackNavigatorLogin extends React.Component {

    
//     componentDidMount = async () => {
      
//       var user=await loginHelper.UserInfo()
  
//     }
  
//     render() {
//       return <Stack.Navigator>
            
//           <Stack.Group
//               screenOptions={({ navigation }) => ({
//               presentation: 'modal',
//               headerLeft:()=>(
//                   <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
//                       <Image source={require("./image/menu.png")} style={{width:50,height:50}} />
//                   </TouchableOpacity>
//               ),
//               //   headerLeft: () => <CancelButton onPress={navigation.goBack} />,
//               })}
//           >
//               <Stack.Screen
//                   name='PipeList'
//                   component={PipeList} 
//               />
//               <Stack.Screen
//                   name='Home'
//                   component={Index} 
//               />
//               <Stack.Screen
//                   name='CreatePipe'
//                   component={CreatePipe} 
//               />
  
//               <Stack.Screen
//                   name='InsertPipe'
//                   component={InsertPipe} 
//               />
              
  
              
  
  
              
  
//               <Stack.Screen
//                   name='PostFood'
//                   component={PostFood} 
//               />
  
//               <Stack.Screen
//                   name='About'
//                   component={About} 
//               />
  
//               <Stack.Screen
//                   name='Home1'
//                   component={Home1} 
//               />
              
              
//               <Stack.Screen
//                   name='ListingPage'
//                   component={ListingPage} 
//               />
  
//               <Stack.Screen
//                   name='DetailPipe'
//                   component={DetailPipe} 
//               />
  
  
  
          
  
  
//           </Stack.Group>
//           </Stack.Navigator>
//   }
// }


const HomeStackNavigatorLogin = () => {
   
    return <Stack.Navigator>
            
                <Stack.Group
                    screenOptions={({ navigation }) => ({
                    presentation: 'modal',
                    headerLeft:()=>(
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Image source={require("./image/menu.png")} style={{width:50,height:50}} />
                        </TouchableOpacity>
                    ),
                    
                    })}
                >
                    
                    <Stack.Screen
                        name='PipeList'
                        component={PipeList} 
                    />

                    
                    <Stack.Screen
                        name='Login'
                        component={Login} 
                    />
                    

                   
                    
                    <Stack.Screen
                        name='CreateAccount'
                        component={CreateAccount} 
                    />
                    
                    <Stack.Screen
                        name='CreatePipe'
                        component={CreatePipe} 
                    />
                    
                   
                    
                   
                    
                    
                    
        
                    <Stack.Screen
                        name='InsertPipe'
                        component={InsertPipe} 
                    />
                    
        
        
                    <Stack.Screen
                        name='Main'
                        component={Main} 
                    />

                    <Stack.Screen
                        name='ApplicationPage'
                        component={ApplicationPage} 
                    />
        
        
                    
        
        
        
                </Stack.Group>
                
        
    </Stack.Navigator>
}


const HomeStackNavigator = () => {
   
    return <Stack.Navigator>
            
                <Stack.Group
                    screenOptions={({ navigation }) => ({
                    presentation: 'modal',
                    headerLeft:()=>(
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Image source={require("./image/menu.png")} style={{width:50,height:50}} />
                        </TouchableOpacity>
                    ),
                    
                    })}
                >
                    
                    


                    <Stack.Screen
                        name='PipeList'
                        component={PipeList} 
                    />
                    
                    <Stack.Screen
                        name='Login'
                        component={Login} 
                    />
                    

                    <Stack.Screen
                        name='CreateAccount'
                        component={CreateAccount} 
                    />



                    
                </Stack.Group>
                
        
    </Stack.Navigator>
}






const LoginDrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{headerShown:false}}
        drawerContent={props => DrawerContent(props)}>
        <Drawer.Screen name='.' component={HomeStackNavigatorLogin}  options={{
                  drawerItemStyle: { display: 'none' }
        }} />
    </Drawer.Navigator>
}

const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{headerShown:false}}
            // drawerContent={props => DrawerContent(props)}
        >
        <Drawer.Screen name='' component={HomeStackNavigator} />
    </Drawer.Navigator>
}





// const Navigation = () => {
//     const [count, setCount] = useState("");
//     useEffect(() => {
//         // declare the data fetching function
//         const fetchData = async () => {
//             var userInfo = await jwtHelper.UserInfo()
//             setCount(userInfo)
//         }
//         fetchData()
//             .catch(console.error);
//     }, [])
//     if(count){
//         return <NavigationContainer>
//                 <LoginDrawerNavigator />
//             </NavigationContainer >
//     }
//     else{
//         return <NavigationContainer>
//         <DrawerNavigator />
//     </NavigationContainer >
        
//     }
    
// }

const Navigation = () => {
    return <NavigationContainer ref={navigationRef}>
        <LoginDrawerNavigator />
    </NavigationContainer >
    
}

export default Navigation