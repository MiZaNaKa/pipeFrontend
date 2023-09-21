import axios from 'axios';
import { createNavigationContainerRef } from '@react-navigation/native';
import * as RootNavigation from '../RootNavigation';
import { NativeModules } from "react-native";

export const navigationRef = createNavigationContainerRef()
import jwtHelper from '../jwtHelper/jwtHelper';
const customAxios = axios.create({
    baseURL: "http://192.168.1.3:3000",
    // baseURL: "https://pipebackendlatest.onrender.com/",
    // timeout: 10000, 
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data: {}
});

// Step-2: Create request, response & error handlers
const requestHandler =async request => {
    var jwt=await jwtHelper.getJWT()
    
    request.headers.Authorization = jwt;  
  
    return request;
};

const responseHandler = response => {
    
    if (response.status === 401) {
        navigationRef.navigate('Login')
    }

    
    navigationRef.navigate('Login')
    return response;
};

const errorHandler = error => {
    if(error.response.status===401){
        jwtHelper.deleteUser()
        RootNavigation.navigate('Login')
        NativeModules.DevSettings.reload();
    }
    else{
        return Promise.reject(error);
    }
    
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );


export default customAxios;