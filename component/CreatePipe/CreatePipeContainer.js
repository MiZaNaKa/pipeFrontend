import React from 'react'
import CreatePipe from './CreatePipe'
import Store from '../../store/CreatePipe'
import Action from "../../actionCreator/CreatePipe"

import loginHelper from '../../jwtHelper/jwtHelper'
import NavigationPage from '../../navigate/navigationPage'


class CreatePipeContainer extends React.Component {

  constructor(props) {
    super(props);
    
    var createPipe = Store.getCreatePipe()
    var tempoData = Store.getTempoData()
    this.state = {
      createPipe: createPipe,
      tempoData:tempoData,
      error:false,
      chartPipe:[],
      nameRequire:false,
      pipeRequire:false
    };
    this.Save=this.Save.bind(this)
  }

  componentDidMount = async () => {
    this.listener = Store.addListener(this.onStoreChange)
    var user=await loginHelper.UserInfo()
    if(!user){
      this.props.navigation.navigate('Login')
    }
   

  }

  createPipe_NameOnChange = (value) => {
    if(value.nativeEvent.text){
      this.setState({
        nameRequire:false
      })
    }
    Action.createPipe_NameOnChange(value.nativeEvent.text)
  }

  createPipe_addMoreAPI = () => {
    if(this.state.createPipe.name){
      this.setState({
        nameRequire:false
      })
      Action.createPipe_addMoreAPI()
    }
    else{
      this.setState({
        nameRequire:true
      })
    }
    
  }

  createPipe_LabelOnChange = (value,index) => {
    var request={
        value:value.nativeEvent.text,
        index:index
    }
    Action.createPipe_LabelOnChange(request)
  }

  createPipe_NumberOnChange = (value,index) => {
    var request={
        value:value.nativeEvent.text,
        index:index
    }
    Action.createPipe_NumberOnChange(request)
  }

  

  createPipe_deleteAPI = (value) => {
    Action.createPipe_deleteAPI(value)
  }

  

  Save =async () => {
    var user=await loginHelper.UserInfo()
   
    var createPipe=this.state.createPipe
   
    if(createPipe.name){
      this.setState({
        nameRequire:false
      })
      var filterBlank=createPipe.pipeValue.filter(x=>x.label=="" || x.value=="")
      if(filterBlank.length===0){
        this.setState({
          pipeRequire:false
        })
        createPipe.userID=user._id
        Action.createPipe_SaveAPI(createPipe)
      }
      else{
        this.setState({
          pipeRequire:true
        })
      }
    }
    else{
      this.setState({
        nameRequire:true
      })
    }
    
    
   
  }

  

  




  componentWillUnmount = () => {
    this.listener.remove()
  }



  onStoreChange = () => {
    var createPipe = Store.getCreatePipe()
    var tempoData = Store.getTempoData()
    if(tempoData.create){
      Store.clearTempoData()
      this.props.navigation.navigate('PipeList')
    }
   
    this.setState({
      createPipe: createPipe,
      tempoData:tempoData
    });
  }


  render() {
    return <CreatePipe 
        {...this.state}
        createPipe_NameOnChange={this.createPipe_NameOnChange}
        createPipe_addMoreAPI={this.createPipe_addMoreAPI}
        createPipe_LabelOnChange={this.createPipe_LabelOnChange}
        createPipe_deleteAPI={this.createPipe_deleteAPI}
        createPipe_NumberOnChange={this.createPipe_NumberOnChange}
        
        Save={this.Save}
    />
  }
}

export default NavigationPage(CreatePipeContainer)

