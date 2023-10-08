import React from 'react'
import { NativeModules} from "react-native";
import CreateAccount from './CreateAccount'
import Store from '../../store/CreateAccount'
import Action from "../../actionCreator/CreateAccount"
import RNRestart from 'react-native-restart'; 
import loginHelper from '../../jwtHelper/jwtHelper'



export default  class CreateAccountContainer extends React.Component {

  constructor(props) {
    super(props);

    
    var email = Store.getEmail()
    var createAccount = Store.getCreateAccount()
    var tempoData = Store.getTempoData()
    this.state = {
      createAccount: createAccount,
      tempoData:tempoData,
      error:false,
      chartPipe:[],
      email:email

      
    };
    this.Save=this.Save.bind(this)
  }

  componentDidMount = async () => {
    Store.clearTempoData()
    this.listener = Store.addListener(this.onStoreChange)
    var user=await loginHelper.UserInfo()
    // if(!user){
    //   this.props.navigation.navigate('Login')
    // }
  }

  createAccount_EmailOnChange = (value) => {
    Action.createAccount_EmailOnChange(value.nativeEvent.text)
  }

  createAccount_NameOnChange = (value) => {
    Action.createAccount_NameOnChange(value.nativeEvent.text)
  }

  createAccount_PasswordOnChange = (value) => {
    Action.createAccount_PasswordOnChange(value.nativeEvent.text)
  }

  createAccount_ConfirmPasswordOnChange = (value) => {
    Action.createAccount_ConfirmPasswordOnChange(value.nativeEvent.text)
  }

  createAccount_OTPOnChange = (value) => {
    Action.createAccount_OTPOnChange(value.nativeEvent.text)
  }

  
  createAccount_AddressOnChange = (value) => {
    Action.createAccount_AddressOnChange(value.nativeEvent.text)
  }

  // createAccount_GetOTPAPI = () => {
  //   if(this.state.createAccount.email){
  //     Action.createAccount_GetOTPAPI(this.state.createAccount.email)
  //   }
    
  // }

  createAccount_LabelOnChange = (value,index) => {
    var request={
        value:value.nativeEvent.text,
        index:index
    }
    Action.createAccount_LabelOnChange(request)
  }

  createAccount_NumberOnChange = (value,index) => {
    var request={
        value:value.nativeEvent.text,
        index:index
    }
    Action.createAccount_NumberOnChange(request)
  }

  

  createAccount_deleteAPI = (value) => {
    Action.createAccount_deleteAPI(value)
  }

  

  Save =async () => {

    var value =await AsyncStorage.getItem('userInfo')
    console.log(value)
    console.log(value)
    // var user=await loginHelper.UserInfo()
   
    var createAccount=this.state.createAccount
    createAccount.userID=user.id
    Action.createAccount_SaveAPI(createAccount)
   
  }

  

  




  componentWillUnmount = () => {
    this.listener.remove()
  }



  onStoreChange = () => {
    var createAccount = Store.getCreateAccount()
    var tempoData = Store.getTempoData()
    var email = Store.getEmail()
    if(tempoData.create){
      Store.clearTempoData()
      RNRestart.Restart();
      // NativeModules.DevSettings.reload();
      this.props.navigation.navigate('PipeList')
      // NativeModules.DevSettings.reload();
    }
   
    this.setState({
      createAccount: createAccount,
      tempoData:tempoData,
      email:email
    });
  }


  render() {
    return <CreateAccount 
        {...this.state}
        createAccount_NameOnChange={this.createAccount_NameOnChange}
        // createAccount_GetOTPAPI={this.createAccount_GetOTPAPI}
        createAccount_LabelOnChange={this.createAccount_LabelOnChange}
        createAccount_deleteAPI={this.createAccount_deleteAPI}
        createAccount_NumberOnChange={this.createAccount_NumberOnChange}
        createAccount_EmailOnChange={this.createAccount_EmailOnChange}
        createAccount_PasswordOnChange={this.createAccount_PasswordOnChange}
        createAccount_ConfirmPasswordOnChange={this.createAccount_ConfirmPasswordOnChange}
        createAccount_OTPOnChange={this.createAccount_OTPOnChange}
        createAccount_AddressOnChange={this.createAccount_AddressOnChange}
        
        
        Save={this.Save}
    />
  }
}

// export default NavigationPage(PostFoodContainer)

