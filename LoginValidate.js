import React from 'react'
import {View} from 'react-native'
import DrawerNNavi from './DrawerNNavi'
import Login from './component/Login/LoginContainer'

import loginHelper from './jwtHelper/jwtHelper'




export default  class LoginValidate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user:''
    };
  }

  componentDidMount = async () => {
    var user=await loginHelper.UserInfo()
    this.setState({
        user:user
    })

  }

 
  

  render() {
    return <View>
        {this.state.user ?
            <DrawerNNavi/>
            :
            <Login/>
        }
    </View>
  }
}


