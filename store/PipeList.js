import { Store } from 'flux/utils';
import dispatcher from '../config/Dispatcher';
import ActionCreator from '../actionCreator/PipeList';
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();


class PipeList extends Store {

	constructor() {
		super(dispatcher);
		this.pipeList=[]

		this.tempoData={
			create:false
		}
	}

	
	clearTempoData=()=>{
        this.login={
            email:'dfsfd',
			password:''
        }

		this.tempoData={
			create:false
		}
    }

	getTempoData=()=>{
        return this.tempoData
    }
	
	getPipeList=()=>{
        return this.pipeList
    }
	__onDispatch = async (action) => {
       
		if (action.type === ActionCreator.actionTypes.getPipeList) {
			
            if(action.data.ok){
                this.pipeList=action.data.data
            }
           
		}

        else if(action.type === ActionCreator.actionTypes.login_PasswordOnChange){
            this.login.password=action.data
        }

		

		else if(action.type === ActionCreator.actionTypes.PostFoodAPI){
            this.tempoData.create=true
        }
		
		

		else{
			return false
		}
		this.__emitChange();
		return true
	}

}

export default new PipeList()
