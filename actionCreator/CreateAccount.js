import dispatcher from '../config/Dispatcher';
import API from '../api/axioAPI';
import CustomAxios from '../api/customAxios';

import Axios from "axios";
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();

class CreateAccount{
    constructor(){
        this.actionTypes = {};	
        this.actionTypes.createAccount_NameOnChange='createAccount_NameOnChange'
        this.actionTypes.createAccount_addMoreAPI='createAccount_addMoreAPI'
       
        this.actionTypes.PostFoodAPI='PostFoodAPI'
        this.actionTypes.createAccount_LabelOnChange='createAccount_LabelOnChange'
        this.actionTypes.createAccount_deleteAPI='createAccount_deleteAPI'
        this.actionTypes.createAccount_NumberOnChange='createAccount_NumberOnChange'

        
        this.actionTypes.createAccount_GetOTPAPI='createAccount_GetOTPAPI'
        this.actionTypes.createAccount_EmailOnChange='createAccount_EmailOnChange'
        this.actionTypes.createAccount_PasswordOnChange='createAccount_PasswordOnChange'
        this.actionTypes.createAccount_ConfirmPasswordOnChange='createAccount_ConfirmPasswordOnChange'
        this.actionTypes.createAccount_OTPOnChange='createAccount_OTPOnChange'
        this.actionTypes.VerifyNAccount='VerifyNAccount'
        this.actionTypes.createAccount_openLoadingForGetOTP='createAccount_openLoadingForGetOTP'
        this.actionTypes.CreateAccount_openLoadingForCreateAcc='CreateAccount_openLoadingForCreateAcc'
        this.actionTypes.createAccount_AddressOnChange='createAccount_AddressOnChange'
        
        
        
    }
    createAccount_AddressOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_AddressOnChange, data: value });
    }

    CreateAccount_openLoadingForCreateAcc(value){
        dispatcher.dispatch({ type: this.actionTypes.CreateAccount_openLoadingForCreateAcc, data: value });
    }

    createAccount_openLoadingForGetOTP(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_openLoadingForGetOTP, data: value });
    }
    createAccount_OTPOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_OTPOnChange, data: value });
    }

    createAccount_ConfirmPasswordOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_ConfirmPasswordOnChange, data: value });
    }


    createAccount_PasswordOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_PasswordOnChange, data: value });
    }


    createAccount_EmailOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_EmailOnChange, data: value });
    }
    
    createAccount_NameOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_NameOnChange, data: value });
    }

    createAccount_addMoreAPI(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_addMoreAPI, data: value });
    }

    createAccount_deleteAPI(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_deleteAPI, data: value });
    }

    createAccount_LabelOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_LabelOnChange, data: value });
    }

    createAccount_NumberOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createAccount_NumberOnChange, data: value });
    }


    createAccount_GetOTPAPI =async(value)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await API.get(`user/getOTP/`+value)
           
            if(res.data.status==1){
                response.ok=true
            }
            else{
                response.ok=false
                response.data=res.data.message
            }
        }
        catch(e){
            response.ok=false
            response.data=e.message
            
        }
        dispatcher.dispatch({ type: this.actionTypes.createAccount_GetOTPAPI, data: response });
    }

    
    testingOTP =async(value)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await CustomAxios.get(`/user/helloTestingWithAuth`)
            // var res = await API.get(`user/helloTesting`)
            
           
            if(res.data.status==1){
                response.ok=true
            }
            else{
                response.ok=false
                response.data=res.data.message
            }
        }
        catch(e){
            response.ok=false
            response.data=e.message
            
        }
        // dispatcher.dispatch({ type: this.actionTypes.createAccount_GetOTPAPI, data: response });
    }

    VerifyNAccount =async(value)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await API.post(`user/verifyOTP`,value)
            
            if(res.data.status==1){
                response.ok=true
                response.data=res.data.data
            }
            else{
                response.ok=false
                response.data=res.data.message
            }
        }
        catch(e){
            response.ok=false
            response.data=e.message
            
        }
        dispatcher.dispatch({ type: this.actionTypes.VerifyNAccount, data: response });
    }
    

   

}

export default new CreateAccount();