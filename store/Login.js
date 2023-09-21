import { Store } from 'flux/utils';
import dispatcher from '../config/Dispatcher';
import ActionCreator from '../actionCreator/Login';
import AsyncStorage from "@react-native-async-storage/async-storage"
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();


class Login extends Store {

	constructor() {
		super(dispatcher);
		this.login={
            email:'',
			password:''
        }

		this.tempoData={
			create:false,
			createLoad:false,
			errorMessage:""
		}
	}

	
	clearTempoData=()=>{
        this.login={
            email:'',
			password:''
        }

		this.tempoData={
			create:false,
			createLoad:false,
			errorMessage:""
		}
    }

	getTempoData=()=>{
        return this.tempoData
    }
	
	getLogin=()=>{
        return this.login
    }
	__onDispatch = async (action) => {
       
		if (action.type === ActionCreator.actionTypes.login_EmailOnChange) {
			this.login.email=action.data
		}

        else if(action.type === ActionCreator.actionTypes.login_PasswordOnChange){
            this.login.password=action.data
        }

		
		else if(action.type === ActionCreator.actionTypes.login_openLoading){
            this.tempoData.createLoad=true
        }


		else if(action.type === ActionCreator.actionTypes.loginAPI){
            if(action.data.ok){
				
				AsyncStorage.setItem("loginJwt", action.data.data.loginJwt);
                AsyncStorage.setItem("userInfo", JSON.stringify(action.data.data.loginUser))
				this.tempoData.create=true
            }
            else{
                this.tempoData.errorMessage=action.data.data
            }
			this.tempoData.createLoad=false
        }


		
		
		

		else{
			return false
		}
		this.__emitChange();
		return true
	}

}

export default new Login()
