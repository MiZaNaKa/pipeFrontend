import React from 'react'
import InsertPipe from './InsertPipe'
import Store from '../../store/InsertPipe'
import Action from "../../actionCreator/InsertPipe"



export default  class InsertPipeContainer extends React.Component {

  constructor(props) {
    super(props);
    
    var insertPipe = Store.getInsertPipe()
    var tempoData = Store.getTempoData()
    this.state = {
      insertPipe: insertPipe,
      tempoData:tempoData,
      error:false,
      chartPipe:[],
      pipeRequire:false
    };
    // this.Save=this.Save.bind(this)
  }

  componentDidMount = async () => {
    this.listener = Store.addListener(this.onStoreChange)
    Action.getDetailPipe(this.props.route.params.id)
  }

  

  insertPipe_NumberOnChange = (value,index) => {
    var request={
        value:value.nativeEvent.text,
        index:index
    }
    Action.insertPipe_NumberOnChange(request)
  }



  

  Save =async () => {
    var insertPipe=this.state.insertPipe
    // insertPipe.userID=user.id
    insertPipe.chartID=this.props.route.params.id
    



    var filterBlank=insertPipe.pipeValue.filter(x=>x.value=="")
    if(filterBlank.length===0){
      this.setState({
        pipeRequire:false
      })
      Action.insertPipe_SaveAPI(insertPipe)
    }
    else{
      this.setState({
        pipeRequire:true
      })
    }
    
  }




//   componentWillUnmount = () => {
//     this.listener.remove()
//   }



  onStoreChange = () => {
    var insertPipe = Store.getInsertPipe()
    var tempoData = Store.getTempoData()

    if(tempoData.create){
        Store.clearTempoData()
        this.props.navigation.navigate('Main',{ id: this.props.route.params.id },{'paramPropKey': 'paramPropValue'})
    }
   
    this.setState({
      insertPipe: insertPipe,
      tempoData:tempoData
    });
  }


  render() {
    return <InsertPipe 
        {...this.state}
        insertPipe_NumberOnChange={this.insertPipe_NumberOnChange}
       
        
        Save={this.Save}
    />
  }
}

// export default NavigationPage(PostFoodContainer)

