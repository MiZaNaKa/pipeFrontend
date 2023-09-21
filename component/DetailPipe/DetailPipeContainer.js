import React from 'react'
import DetailPipe from './DetailPipe'
import Store from '../../store/DetailPipe'
import Action from "../../actionCreator/DetailPipe"

export default  class DetailPipeContainer extends React.Component {

  constructor(props) {
    super(props);
    
    var detailPipe = Store.getDetailPipe()
    var tempoData = Store.getTempoData()
    this.state = {
      detailPipe: detailPipe,
      tempoData:tempoData,
      error:false,
      chartPipe:[],
      range:{
        startDate: undefined, endDate: undefined 
      },
      dateFilter:false,
      startDate:'',
      endDate:'',
      id:''

    };
    // this.Save=this.Save.bind(this)f
  }

  componentDidMount = async () => {
    this.props.navigation.addListener('willFocus',this.onStoreChange)
    this.listener = Store.addListener(this.onStoreChange)
    this.setState({
      id:this.props.route.params.id
    })
    Action.getDetailPipe(this.props.route.params.id)

  }

  openCalender=()=>{
    this.setState({
        dateFilter:true
    })
  }

  onConfirm=(value)=>{
    if(value.startDate!==undefined && value.endDate !== undefined){
      this.setState({
        dateFilter:false,
        startDate:value.startDate.toDateString(),
        endDate:value.endDate.toDateString(),
        range:value
      })
      var request={
        startDate:value.startDate.toISOString(),
        endDate:value.endDate.toISOString(),
        id:this.state.id
      }
    
      
      Action.filterDate(request)
    }
    
  }



  insertToday = () => {
    this.props.navigation.navigate('InsertPipe',{ id: this.props.route.params.id })
  }

  applicationPage = () => {
    this.props.navigation.navigate('ApplicationPage',{ value:this.state.tempoData.pipeValue })
  }

  reload = () => {
    this.setState({
      range:{
        startDate: undefined, endDate: undefined 
      },
      dateFilter:false,
      startDate:'',
      endDate:'',
    })
    Action.getDetailPipe(this.state.id)
  }

  

  



  // componentWillUnmount = () => {
  //   this.listener.remove()
  // }



  onStoreChange = () => {
    var detailPipe = Store.getDetailPipe()
    var tempoData = Store.getTempoData()
   
    this.setState({
      detailPipe: detailPipe,
      tempoData:tempoData
    });
  }


  render() {
    return <DetailPipe 
        {...this.state}
        openCalender={this.openCalender}
        onConfirm={this.onConfirm}
        insertToday={this.insertToday}
        reload={this.reload}
        
        applicationPage={this.applicationPage}
    />
  }
}

// export default NavigationPage(PostFoodContainer)

