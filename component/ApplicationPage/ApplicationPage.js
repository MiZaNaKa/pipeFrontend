import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class ApplicationPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pipeValue:[]
        }
    }

    componentDidMount = async () => {
        
        this.setState({
            pipeValue:this.props.route.params.value
        })
        
    }


    render(){
        
        return(
            <View style={CommonStyle.content}>
                <ScrollView>
                    
                    {this.state.pipeValue.map((value,index)=>{
                        return <View key={index} style={CommonStyle.borderBottom}>
                                    <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                        <View style={[CommonStyle.column,CommonStyle.oneBox]}>
                                            <View style={[{backgroundColor:value.color},CommonStyle.checkBox]}>

                                            </View>
                                            
                                        </View>
                                        <View style={[CommonStyle.column,CommonStyle.twoBox]}>
                                            
                                            <Text>{value.label}</Text>
                                        </View>
                                        <View style={[CommonStyle.column,CommonStyle.twoBox]}>
                                            <Text>{value.percentage}%</Text>
                                        </View>
                                    </View>
                                    
                        </View>
                        
                    })}
                    

                </ScrollView>   
            </View>
        )
    }
}