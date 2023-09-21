import React from 'react'
import PipeList from './PipeList'
import Store from '../../store/PipeList'
import Action from "../../actionCreator/PipeList"
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginHelper from '../../jwtHelper/jwtHelper'



export default  class PipeListContainer extends React.Component {

  constructor(props) {
    super(props);
    
    var pipeList = Store.getPipeList()
    var tempoData = Store.getTempoData()
    this.state = {
      pipeList: pipeList,
      tempoData:tempoData,
      error:false,
      id:''
    };
  }

  componentDidMount = async () => {
    this.listener = Store.addListener(this.onStoreChange)
    var user=await loginHelper.UserInfo()
    console.log(user)
    console.log(user)
    if(user){
      this.setState({
        id:user._id
      })
      Action.getPipeList(user._id)
    }
    else{
      this.props.navigation.navigate('Login')
    }
   

  }

  goPipeDetail = (id) => {
    this.props.navigation.navigate('Main',{ id: id })
  }

  goCreate = () => {
    this.props.navigation.navigate('CreatePipe')
  }

  reloadPipeList = () => {
    Action.getPipeList(this.state.id)
  }

  

  

  componentWillUnmount = () => {
    this.listener.remove()
  }



  onStoreChange = () => {
    var pipeList = Store.getPipeList()
    var tempoData = Store.getTempoData()
    if(tempoData.create){
      Store.clearTempoData()
      
    }
    this.setState({
      pipeList: pipeList,
      tempoData:tempoData
    });
  }


  render() {
    return <PipeList 
        {...this.state}
        goPipeDetail={this.goPipeDetail}
        goCreate={this.goCreate}
        reloadPipeList={this.reloadPipeList}
    />
  }
}

// export default NavigationPage(PostFoodContainer)

