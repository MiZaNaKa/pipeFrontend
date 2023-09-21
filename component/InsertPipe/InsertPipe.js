import React from 'react'
import {View,Text,TextInput,StyleSheet,Button,ScrollView,TouchableOpacity} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import { GAMBannerAd, BannerAdSize, TestIds,} from 'react-native-google-mobile-ads'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class InsertPipe extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        
        return(
            <View style={CommonStyle.content}>
                <ScrollView>
                    
                    
                    {this.props.insertPipe.pipeValue.map((value,index)=>{
                        return <View key={index}>
                                    <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column,CommonStyle.marginR10]}>
                                            <TextInput  
                                                style={CommonStyle.textInput}
                                                value={value.label}
                                                placeholder="label"
                                            />
                                        </View>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column,CommonStyle.marginR10]}>
                                            <TextInput  
                                                style={this.props.pipeRequire &&value.value=="" ? CommonStyle.textInputError:CommonStyle.textInput}
                                                onChange={(e)=>this.props.insertPipe_NumberOnChange(e,index)}  
                                                value={value.value}
                                                placeholder="value"
                                                keyboardType = 'numeric'
                                                maxLength={7}
                                            />
                                        </View>
                                    </View>
                                    
                        </View>
                        
                    })}
                    
                    

                    {/* <View  style={[{padding:18,marginBottom:20},CommonStyle.row]}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text>Password</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'column'}} >
                            <TextInput  
                                style={[CommonStyle.textArea,CommonStyle.marginB]}  
                                onChange={this.props.login_PasswordOnChange} 
                                value={this.props.createPipe.password}
                                secureTextEntry={true}
                            />
                        </View>
                    </View> */}


                    <View style={[CommonStyle.marginB]}  >
                        {this.props.error ?
                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}  >{this.props.error}</Text>
                            :
                            null
                        }
                    </View>
                    

                    <Button title='Save' onPress={this.props.Save}/>

                    <View style={[CommonStyle.marginT]}>
                        <GAMBannerAd
                            unitId={TestIds.BANNER}
                            sizes={[BannerAdSize.FULL_BANNER]}
                            requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                            }}
                        />
                    </View>

                </ScrollView>   
            </View>
        )
    }
}