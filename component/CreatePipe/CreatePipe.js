import React from 'react'
import {View,Text,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import Delete from "../../image/delete.png"
import { GAMBannerAd, BannerAdSize, TestIds,} from 'react-native-google-mobile-ads'; 


export default class CreatePipe extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        
        return(
            <View style={CommonStyle.content}>
                <View style={CommonStyle.contentBox}>
                    <ScrollView>
                        <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                            <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                <Text>Chart Name</Text>
                            </View>
                            <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                <TextInput  
                                    style={this.props.nameRequire ? CommonStyle.textInputError:CommonStyle.textInput}
                                    onChange={this.props.createPipe_NameOnChange} 
                                    value={this.props.createPipe.name}
                                />

                                <TouchableOpacity style={CommonStyle.marginT} onPress={this.props.createPipe_addMoreAPI}>
                                    <View style={[CommonStyle.buttonBox]}>
                                        <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}>Add </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {this.props.createPipe.pipeValue.map((value,index)=>{
                            return <View key={index} >
                                    <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column,CommonStyle.marginR10]} >
                                            <TextInput  
                                                style={this.props.pipeRequire && value.label=="" ? CommonStyle.textInputError:CommonStyle.textInput}
                                                // style={[CommonStyle.textInput]}  
                                                onChange={(e)=>this.props.createPipe_LabelOnChange(e,index)} 
                                                value={value.label}
                                                placeholder="label"
                                            />
                                        </View>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                            <TextInput  
                                                style={this.props.pipeRequire && value.value=="" ? CommonStyle.textInputError:CommonStyle.textInput}
                                                // style={[CommonStyle.textInput]}  
                                                onChange={(e)=>this.props.createPipe_NumberOnChange(e,index)}  
                                                value={value.value}
                                                placeholder="value"
                                                keyboardType = 'numeric'
                                                maxLength={7}
                                            />
                                        </View>
                                        <View style={[CommonStyle.halfBOx,CommonStyle.column]}>
                                            <TouchableOpacity  onPress={()=>this.props.createPipe_deleteAPI(index)}>
                                                <Image source={Delete} style={[CommonStyle.iconImage,CommonStyle.margin10T]}/>
                                            </TouchableOpacity>
                                        </View>
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
                            <TouchableOpacity style={CommonStyle.marginT} onPress={this.props.Save}>
                                <View style={[CommonStyle.buttonBox]}>
                                    <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}>Save </Text>
                                </View>
                            </TouchableOpacity>
                            :
                            null
                        }

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
            </View>
        )
    }
}