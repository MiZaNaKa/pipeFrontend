import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Button,ScrollView,Image} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import Reload from "../../image/reload.png"
import { GAMBannerAd, BannerAdSize, TestIds,} from 'react-native-google-mobile-ads'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class PipeList extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        // const {navigation} = this.props
        return(
            <View style={CommonStyle.content}>
                <ScrollView>
                    <TouchableOpacity onPress={this.props.reloadPipeList}>
                        <Image resizeMode='contain' source={Reload} style={[CommonStyle.refreshIcon,CommonStyle.marginR10,CommonStyle.marginT]}/>
                    </TouchableOpacity>
                    
                    {this.props.pipeList.length>0 ?
                        <View>
                            {this.props.pipeList.map((value,index)=>{
                                return <TouchableOpacity onPress={()=>this.props.goPipeDetail(value._id)} style={CommonStyle.borderBottom} key={index}>
                                    <View style={[CommonStyle.marginB,CommonStyle.marginT]}>
                                        <Text style={CommonStyle.title}>{value.chartName}</Text>
                                    </View>
                                    

                                    <View>
                                        <Text>Created Date {new Date(value.date).toLocaleString().replace(",","").replace(/:.. /," ")}</Text>
                                    </View>
                                </TouchableOpacity>
                                
                            })}
                        </View>
                        :
                        <View>
                            <Text style={CommonStyle.dataNotFound}>Data not found</Text>
                            <TouchableOpacity onPress={this.props.goCreate}>
                                <Text style={CommonStyle.whiteButton}>Create Pipe</Text>
                            </TouchableOpacity>
                        </View>
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
        )
    }
}