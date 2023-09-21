import dispatcher from '../config/Dispatcher';
import API from '../api/axioAPI';

import Axios from "axios";

class Login{
    constructor(){
        this.actionTypes = {};	
        this.actionTypes.login_EmailOnChange='login_EmailOnChange'
        this.actionTypes.login_PasswordOnChange='login_PasswordOnChange'
        this.actionTypes.login_openLoading='login_openLoading'


        
       
        this.actionTypes.loginAPI='loginAPI'
        
        
    }
    login_openLoading(value){
        dispatcher.dispatch({ type: this.actionTypes.login_openLoading, data: value });
    }
    
    login_EmailOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.login_EmailOnChange, data: value });
    }

    login_PasswordOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.login_PasswordOnChange, data: value });
    }

    loginAPI =async(value)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var result = await API.post(`user/login`,value)
            if(result.data.status==1){
				response.ok = true;
                response.data = result.data
            }
            else{
                response.ok = false;
                response.data = result.data.message
            }	
        }
        catch(e){
            response.ok=false
            response.data=e.message
            
        }
        dispatcher.dispatch({ type: this.actionTypes.loginAPI, data: response });
    }


   

}

export default new Login();