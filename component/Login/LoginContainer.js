import React from 'react'
import Login from './Login'
import Store from '../../store/Login'
import Action from "../../actionCreator/Login"
import { NativeModules } from "react-native";
import loginHelper from '../../jwtHelper/jwtHelper'
export default  class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    
    var login = Store.getLogin()
    var tempoData = Store.getTempoData()
    this.state = {
      login: login,
      tempoData:tempoData,
      error:false
    };
    this.goCreatAccountLink=this.goCreatAccountLink.bind(this)
  }

  componentDidMount = async () => {
    this.props.navigation.addListener('willFocus',this.onStoreChange)
    this.listener = Store.addListener(this.onStoreChange)
    

  }

  login_EmailOnChange = (value) => {
    Action.login_EmailOnChange(value.nativeEvent.text)
  }

  login_PasswordOnChange = (value) => {
    Action.login_PasswordOnChange(value.nativeEvent.text)
  }

  goCreatAccountLink = () => {
    this.props.navigation.navigate('CreateAccount')
  }

  componentWillUnmount = () => {
    this.listener.remove()
  }



  onStoreChange = () => {
    var login = Store.getLogin()
    var tempoData = Store.getTempoData()
    if(tempoData.create){
      
      Store.clearTempoData()
      this.props.navigation.navigate('PipeList')
      NativeModules.DevSettings.reload();
    }
    this.setState({
      login: login,
      tempoData:tempoData
    });
  }


  render() {
    return <Login 
        {...this.state}
        login_EmailOnChange={this.login_EmailOnChange}
        login_PasswordOnChange={this.login_PasswordOnChange}
        goCreatAccountLink={this.goCreatAccountLink}
    />
  }
}

// export default NavigationPage(PostFoodContainer)

