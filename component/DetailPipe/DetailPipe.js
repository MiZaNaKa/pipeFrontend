import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import Pie from 'react-native-pie';
import { DatePickerModal } from 'react-native-paper-dates';
import Reload from "../../image/reload.png"
import { GAMBannerAd, BannerAdSize, TestIds,} from 'react-native-google-mobile-ads'; 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class DetailPipe extends React.Component{
    constructor(props){
        super(props)
        this.state={
           

        }
    }

    

    

    render(){
        
        return(
            <View style={CommonStyle.content}>
                <ScrollView>
                    <TouchableOpacity onPress={this.props.reload}>
                        <Image resizeMode='contain' source={Reload} style={[CommonStyle.refreshIcon,CommonStyle.marginR10,CommonStyle.marginT]}/>
                    </TouchableOpacity>
                    <View style={[CommonStyle.marginB,CommonStyle.paddingAll]}>
                        {this.props.startDate ?
                            <Text>{this.props.startDate} __ {this.props.endDate}</Text>
                            :
                            null
                            
                        }
                    </View>
                    

                    <View style={[CommonStyle.marginB,CommonStyle.paddingAll]}>
                        <View style={CommonStyle.oneBox}>
                            <TouchableOpacity onPress={this.props.openCalender}>
                                
                                <View>
                                    <Text>Search Date</Text>
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                        <View style={CommonStyle.oneBox}>
                            <TouchableOpacity style={CommonStyle.marginB} onPress={this.props.insertToday}>
                                <Text style={{color:'blue',textAlign:'right'}}>+Insert</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <DatePickerModal
                        locale="en"
                        mode="range"
                        visible={this.props.dateFilter}
                        // onDismiss={onDismiss}
                        startDate={this.props.range.startDate}
                        endDate={this.props.range.endDate}
                        onConfirm={this.props.onConfirm}
                    />

                    <View
                        style={{
                            paddingVertical: 15,
                            marginLeft:'auto',
                            marginRight:'auto',
                            marginBottom:40
                        }}
                    >
                        {this.props.detailPipe.chartValue.length>0 ?
                            <View style={{marginBottom:70}}>
                                <Pie
                                    radius={80}
                                    innerRadius={60}
                                    
                                    sections={this.props.detailPipe.chartValue}
                                    
                                    dividerSize={6}
                                    strokeCap={'butt'}
                                />
                            </View>
                            :
                            null
                        }
                       

                        {this.props.tempoData.pipeValue.map((value,index)=>{
                            return <View key={index} style={[CommonStyle.row,CommonStyle.marginB]}>
                                    <View style={[{backgroundColor:value.color},CommonStyle.checkBox]}>

                                    </View>

                                    <View>
                                        <Text>{value.label}</Text>
                                    </View>

                                </View>
                        })}
                            
                            
                        
                            
                    </View>
                    <View style={CommonStyle.whiteButton}>
                        <TouchableOpacity  onPress={this.props.applicationPage}>
                            <Text style={[CommonStyle.textCenter,CommonStyle.textBlue]}>Application Page</Text>
                        </TouchableOpacity>
                    </View>

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