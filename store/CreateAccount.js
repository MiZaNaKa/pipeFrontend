import { Store } from 'flux/utils';
import dispatcher from '../config/Dispatcher';
import ActionCreator from '../actionCreator/CreateAccount';
import  Enumerable from 'linq'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();


class CreateAccount extends Store {

	constructor() {
		super(dispatcher);
		this.createAccount={
            email:'',
            name:"",
            address:"",
            password:"",
            confirmPassword:"",
            otp:""
        }

		this.tempoData={
			create:false,
			getOTP:false,
			errorMessage:"",
			getOTPLoading:false,
			getCreateLoading:false
		}

        this.email=""
	}

	
	clearTempoData=()=>{
        this.email=""
        this.createAccount={
            email:'',
            name:"",
            password:"",
            confirmPassword:"",
            otp:""
        }

		this.tempoData={
			create:false,
            error:"",
            getOTP:false
		}
    }

	getTempoData=()=>{
        return this.tempoData
    }

    getEmail=()=>{
        return this.email
    }
	
	getCreateAccount=()=>{
        return this.createAccount
    }
	__onDispatch = async (action) => {
       
		if (action.type === ActionCreator.actionTypes.createAccount_EmailOnChange) {
			this.createAccount.email=action.data
            this.email=action.data
		}
        else if(action.type === ActionCreator.actionTypes.createAccount_NameOnChange){
            this.createAccount.name=action.data
        }
        else if(action.type === ActionCreator.actionTypes.createAccount_PasswordOnChange){
            this.createAccount.password=action.data
        }
        else if(action.type === ActionCreator.actionTypes.createAccount_ConfirmPasswordOnChange){
            this.createAccount.confirmPassword=action.data
        }
        else if(action.type === ActionCreator.actionTypes.createAccount_GetOTPAPI){
            if(action.data.ok){
                this.tempoData.getOTP=true
                this.tempoData.errorMessage="",
                this.tempoData.getOTPError=""
            }
            else{
                this.tempoData.errorMessage=action.data.data
            }
            this.tempoData.getOTPLoading=false
			this.createAccount.otp=""
        }

        else if(action.type === ActionCreator.actionTypes.createAccount_OTPOnChange){
            this.createAccount.otp=action.data
        }

        else if(action.type === ActionCreator.actionTypes.VerifyNAccount){
            
           
            if(action.data.ok){
                alert(action.data.data)
                AsyncStorage.setItem("loginJwt", action.data.data.jwt);
                AsyncStorage.setItem("userInfo", JSON.stringify(action.data.data.userInfo))
				this.tempoData.create=true
            }
            else{
                this.tempoData.errorMessage=action.data.data
            }
			this.tempoData.getCreateLoading=false
        }


        else if(action.type === ActionCreator.actionTypes.createAccount_addMoreAPI){
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
            this.createAccount.pipeValue.push(request)
        }

        else if(action.type === ActionCreator.actionTypes.createAccount_LabelOnChange){
            
            this.createAccount.pipeValue[action.data.index].label= action.data.value
        }

        
        else if(action.type === ActionCreator.actionTypes.createAccount_NumberOnChange){
            
            this.createAccount.pipeValue[action.data.index].value= action.data.value
            
            // this.tempoData.highestValue = Enumerable.from(this.createAccount.pipeValue)
            //     .max("$.value");

            // for(var i=0;i<this.createAccount.pipeValue.length;i++){
            //     var calculate=100*this.createAccount.pipeValue[i].value/this.tempoData.highestValue
            //     // alert(calculate)
            //     this.tempoData.pipeValue[i].percentage=calculate
            // } 
           
            // this.tempoData.pipeValue[action.data.index].percentage = action.data.value
            
        }

        else if(action.type === ActionCreator.actionTypes.createAccount_deleteAPI){
            this.createAccount.pipeValue.splice(action.data, 1)
        }

        else if(action.type === ActionCreator.actionTypes.createAccount_AddressOnChange){
            this.createAccount.address=action.data
        }

        

        
        else if(action.type === ActionCreator.actionTypes.CreateAccount_openLoadingForCreateAcc){
            this.tempoData.getCreateLoading=true
        }

		else if(action.type === ActionCreator.actionTypes.createAccount_openLoadingForGetOTP){
            this.tempoData.getOTPLoading=true
			this.tempoData.getOTP=false
        }
		
		

		else{
			return false
		}
		this.__emitChange();
		return true
	}

}

export default new CreateAccount()
