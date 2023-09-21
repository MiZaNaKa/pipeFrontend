import dispatcher from '../config/Dispatcher';
import API from '../api/axioAPI';
import CustomAxios from '../api/customAxios';
import Axios from "axios";
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();

class PipeList{
    constructor(){
        this.actionTypes = {};	
        this.actionTypes.login_EmailOnChange='login_EmailOnChange'
        this.actionTypes.login_PasswordOnChange='login_PasswordOnChange'
       
        this.actionTypes.getPipeList='getPipeList'
        
        
    }
    
    login_EmailOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.login_EmailOnChange, data: value });
    }

    login_PasswordOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.login_PasswordOnChange, data: value });
    }

    getPipeList =async(id)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await CustomAxios.get(`pipe/getMyPipe/`+id)


            // var res = await API.get(`pipe/getMyPipe/`+id)
            if(res.data.status==1){
                
                response.ok=true
                response.data=res.data.success.data.success.data
            }
            else{

                response.ok=false
            }
        }
        catch(e){
            response.ok=false
            response.data=e.message
            
        }
        
        dispatcher.dispatch({ type: this.actionTypes.getPipeList, data: response });
    }


   

}

export default new PipeList();