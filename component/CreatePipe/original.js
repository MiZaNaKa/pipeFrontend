import React from 'react'
import {View,Text,TextInput,StyleSheet,Button,ScrollView} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class CreatePipe extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        
        return(
            <View style={{flex:1}}>
                <ScrollView>
                    
                
                    
                    <View  style={[{padding:18,marginBottom:20},CommonStyle.row]}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text>Chart Name</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'column'}} >
                            <TextInput  
                                style={[CommonStyle.textArea,CommonStyle.marginB]}  
                                onChange={this.props.createPipe_NameOnChange} 
                                value={this.props.createPipe.name}
                            />

                            <Button title='Add' onPress={this.props.createPipe_addMoreAPI}/>
                        </View>
                    </View>


                    {this.props.createPipe.pipeValue.map((value,index)=>{
                        return <View key={index} style={{borderBottomWidth:1,borderColor:'#cfcfcf',paddingBottom:10}}>
                                    <View  style={[{padding:8,marginBottom:10},CommonStyle.row]}>
                                        <View style={{flex: 1, flexDirection: 'column',marginRight:15,}}>
                                            <TextInput  
                                                style={[CommonStyle.textArea]}  
                                                onChange={(e)=>this.props.createPipe_LabelOnChange(e,index)} 
                                                value={value.label}
                                                placeholder="label"
                                            />
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'column',}} >
                                            <TextInput  
                                                style={[CommonStyle.textArea]} 
                                                onChange={(e)=>this.props.createPipe_NumberOnChange(e,index)}  
                                                value={value.value}
                                                placeholder="value"
                                                keyboardType = 'numeric'
                                                maxLength={7}
                                            />
                                        </View>

                                       
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column',marginLeft:'auto',marginRight:'auto'}} >
                                        
                                        <Button title='Delete' onPress={()=>this.props.createPipe_deleteAPI(index)}/>
                                    </View>
                        </View>
                        
                    })}
                    
                    

                   


                    <View style={[CommonStyle.marginB]}  >
                        {this.props.error ?
                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}  >{this.props.error}</Text>
                            :
                            null
                        }
                    </View>
                    
                    {this.props.createPipe.pipeValue.length>0 ?
                        <Button title='Save' onPress={this.props.Save}/>
                        :
                        null
                    }


                    

                </ScrollView>   
            </View>
        )
    }
}