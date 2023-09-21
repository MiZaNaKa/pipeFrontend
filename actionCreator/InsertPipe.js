import dispatcher from '../config/Dispatcher';
import API from '../api/axioAPI';
import CustomAxios from '../api/customAxios';

import Axios from "axios";
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();

class InsertPipe{
    constructor(){
        this.actionTypes = {};	
        


        this.actionTypes.getPipeForInsert='getPipeForInsert'
        this.actionTypes.insertPipe_NumberOnChange='insertPipe_NumberOnChange'
        this.actionTypes.insertPipe_SaveAPI='insertPipe_SaveAPI'

        
        
    }
    
    insertPipe_NumberOnChange(value){
        dispatcher.dispatch({ type: this.actionTypes.insertPipe_NumberOnChange, data: value });
    }

    


    insertPipe_SaveAPI =async(value)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await CustomAxios.post(`pipe/insert`,value)
            if(res.data.status==1){
                response.ok=true
            }
            else{
                response.ok=false
            }
        }
        catch(e){
            response.ok=false
            response.data=e.message
            
        }
        dispatcher.dispatch({ type: this.actionTypes.insertPipe_SaveAPI, data: response });
    }

    
    getDetailPipe =async(id)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await CustomAxios.get(`pipe/getDetailPipe/`+id)
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
        
        dispatcher.dispatch({ type: this.actionTypes.getPipeForInsert, data: response });
    }

}

export default new InsertPipe();