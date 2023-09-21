import { Store } from 'flux/utils';
import dispatcher from '../config/Dispatcher';
import ActionCreator from '../actionCreator/InsertPipe';
import  Enumerable from 'linq'
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();


class InsertPipe extends Store {

	constructor() {
		super(dispatcher);
		this.insertPipe={
            chartID:'',
            date:'',
            pipeValue:[],
            chartValue:[]
        }

		this.tempoData={
			create:false,
            pipeValue:[],
            highestValue:0
		}
	}

	
	clearTempoData=()=>{
        this.insertPipe={
            chartID:'',
            date:'',
            pipeValue:[],
            chartValue:[]
        }

		this.tempoData={
			create:false,
            pipeValue:[],
            highestValue:0
		}
    }

	getTempoData=()=>{
        return this.tempoData
    }
	
	getInsertPipe=()=>{
        return this.insertPipe
    }
	__onDispatch = async (action) => {
       
		if (action.type === ActionCreator.actionTypes.getPipeForInsert) {
            this.insertPipe.pipeValue=[]
			// this.insertPipe.pipeValue=action.data.data.pipeValue
            var array=action.data.data[0].pipeValue
            for(var i=0;i<array.length;i++){
                var obj={
                    label:array[i].label,
                    value:''
                }
                this.insertPipe.pipeValue.push(obj)
            } 
		}

         
        else if(action.type === ActionCreator.actionTypes.insertPipe_NumberOnChange){
            this.insertPipe.pipeValue[action.data.index].value= action.data.value
        }

        else if(action.type === ActionCreator.actionTypes.createPipe_deleteAPI){
            this.createPipe.pipeValue.splice(action.data, 1)
        }

		else if(action.type === ActionCreator.actionTypes.insertPipe_SaveAPI){
            if(action.data.ok){
                this.tempoData.create=true
            }
            
        }
		
		

		else{
			return false
		}
		this.__emitChange();
		return true
	}

}

export default new InsertPipe()
