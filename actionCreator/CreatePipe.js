import dispatcher from '../config/Dispatcher';
import API from '../api/axioAPI';
import CustomAxios from '../api/customAxios';

import Axios from "axios";
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();

class CreatePipe{
    constructor(){
        this.actionTypes = {};	
        this.actionTypes.createPipe_NameOnChange='createPipe_NameOnChange'
        this.actionTypes.createPipe_addMoreAPI='createPipe_addMoreAPI'
       
        this.actionTypes.PostFoodAPI='PostFoodAPI'
        this.actionTypes.createPipe_LabelOnChange='createPipe_LabelOnChange'
        this.actionTypes.createPipe_deleteAPI='createPipe_deleteAPI'
        this.actionTypes.createPipe_NumberOnChange='createPipe_NumberOnChange'

        
    }
    
    createPipe_NameOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createPipe_NameOnChange, data: value });
    }

    createPipe_addMoreAPI(value){
        dispatcher.dispatch({ type: this.actionTypes.createPipe_addMoreAPI, data: value });
    }

    createPipe_deleteAPI(value){
        dispatcher.dispatch({ type: this.actionTypes.createPipe_deleteAPI, data: value });
    }

    createPipe_LabelOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createPipe_LabelOnChange, data: value });
    }

    createPipe_NumberOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.createPipe_NumberOnChange, data: value });
    }


    createPipe_SaveAPI =async(value)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await CustomAxios.post(`pipe/create`,value)
            if(res.data.status==1){
                response.ok=true
            }
            else{
                response.ok=false
            }
        }
        catch(e){
            console.log(e.message)
            response.ok=false
            response.data=e.message
            
        }
        dispatcher.dispatch({ type: this.actionTypes.createPipe_SaveAPI, data: response });
    }

    


   

}

export default new CreatePipe();