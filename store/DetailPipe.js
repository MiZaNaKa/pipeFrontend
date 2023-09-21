import { Store } from 'flux/utils';
import dispatcher from '../config/Dispatcher';
import ActionCreator from '../actionCreator/DetailPipe';
// import { Dispatcher } from "flux";
// const dispatcher = new Dispatcher();


class DetailPipe extends Store {

	constructor() {
		super(dispatcher);
		this.detailPipe={
            name:'',
			pipeValue:[],
            chartValue:[]
        }

		this.tempoData={
			create:false,
			pipeValue:[]
		}
	}

	
	clearTempoData=()=>{
        this.detailPipe={
            name:'',
			pipeValue:[],
            chartValue:[]
        }

		this.tempoData={
			create:false
		}
    }

	getTempoData=()=>{
        return this.tempoData
    }
	
	getDetailPipe=()=>{
        return this.detailPipe
    }
	__onDispatch = async (action) => {
       
		if (action.type === ActionCreator.actionTypes.getDetailPipe) {
			
            if(action.data.ok){
				this.detailPipe={
					name:'',
					pipeValue:[],
					chartValue:[]
				}
                this.detailPipe=action.data.data[0]
				
				var array=this.detailPipe.pipeValue
				this.tempoData.pipeValue=[]
				for(var i=0;i<array.length;i++){
                    var object={
						"label" : array[i].label,
						"value" : array[i].value,
						"percentage" : this.detailPipe.chartValue[i].percentage,
						"color" : this.detailPipe.chartValue[i].color
					}
					this.tempoData.pipeValue.push(object)
                }
            }
           
		}
		else if(action.type === ActionCreator.actionTypes.filterDate){
			if(action.data.ok){

				if(action.data.data.length>0){
					this.detailPipe=action.data.data[0]
					var array=this.detailPipe.pipeValue
					this.tempoData.pipeValue=[]
					for(var i=0;i<array.length;i++){
						var object={
							"label" : array[i].label,
							"value" : array[i].value,
							"percentage" : this.detailPipe.chartValue[i].percentage,
							"color" : this.detailPipe.chartValue[i].color
						}
						this.tempoData.pipeValue.push(object)
					}

				}
				else{
					this.tempoData.pipeValue=[]
					this.detailPipe.chartValue=[]
					this.detailPipe.pipeValue=[]
				}
				
                

            }
        }

		

        
		

		else{
			return false
		}
		this.__emitChange();
		return true
	}

}

export default new DetailPipe()
