import dispatcher from '../config/Dispatcher';
import CustomAxios from '../api/customAxios';
import API from '../api/axioAPI';

import Axios from "axios";
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();

class DetailPipe{
    constructor(){
        this.actionTypes = {};	
       
       
        this.actionTypes.getDetailPipe='getDetailPipe'
        this.actionTypes.filterDate='filterDate'
        
        
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
        
        dispatcher.dispatch({ type: this.actionTypes.getDetailPipe, data: response });
    }

    filterDate =async(request)=>{
        
        try{
            var response={
                data:[],
                ok:false
            }
            var res = await CustomAxios.post(`pipe/filterDate`,request)
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
        
        dispatcher.dispatch({ type: this.actionTypes.filterDate, data: response });
    }


    


   

}

export default new DetailPipe();