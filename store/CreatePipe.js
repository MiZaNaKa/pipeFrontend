import { Store } from 'flux/utils';
import dispatcher from '../config/Dispatcher';
import ActionCreator from '../actionCreator/CreatePipe';
import  Enumerable from 'linq'
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();


class CreatePipe extends Store {

	constructor() {
		super(dispatcher);
		this.createPipe={
            name:'',
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
        this.createPipe={
            name:'',
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
	
	getCreatePipe=()=>{
        return this.createPipe
    }
	__onDispatch = async (action) => {
       
		if (action.type === ActionCreator.actionTypes.createPipe_NameOnChange) {
			this.createPipe.name=action.data
		}

        else if(action.type === ActionCreator.actionTypes.createPipe_addMoreAPI){
            var request={
                label:'',
                value:'',
                percentage:0,

            }
            var randomColor = Math.floor(Math.random()*16777215).toString(16)
        //     var obj={
        //         percentage: 1,
        //         color: '#'+randomColor,
        //     }

        //    this.tempoData.pipeValue.push(obj)
            this.createPipe.pipeValue.push(request)
        }

        else if(action.type === ActionCreator.actionTypes.createPipe_LabelOnChange){
            
            this.createPipe.pipeValue[action.data.index].label= action.data.value
        }

        
        else if(action.type === ActionCreator.actionTypes.createPipe_NumberOnChange){
            
            this.createPipe.pipeValue[action.data.index].value= action.data.value
            
            // this.tempoData.highestValue = Enumerable.from(this.createPipe.pipeValue)
            //     .max("$.value");

            // for(var i=0;i<this.createPipe.pipeValue.length;i++){
            //     var calculate=100*this.createPipe.pipeValue[i].value/this.tempoData.highestValue
            //     // alert(calculate)
            //     this.tempoData.pipeValue[i].percentage=calculate
            // } 
           
            // this.tempoData.pipeValue[action.data.index].percentage = action.data.value
            
        }

        else if(action.type === ActionCreator.actionTypes.createPipe_deleteAPI){
            this.createPipe.pipeValue.splice(action.data, 1)
        }

        

		

		else if(action.type === ActionCreator.actionTypes.createPipe_SaveAPI){
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

export default new CreatePipe()
