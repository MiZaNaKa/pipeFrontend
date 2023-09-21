import React from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native'
import { GAMBannerAd, BannerAdSize, TestIds,} from 'react-native-google-mobile-ads'; 
import CommonStyle from "../../commonStyle/commonStyle"
import SimpleReactValidator from 'simple-react-validator';
import Action from "../../actionCreator/Login"
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.validator = new SimpleReactValidator();
        this.state={

        }
    }

    loginAPI = () => {
       
        if (this.validator.allValid()){
            Action.login_openLoading()
            Action.loginAPI( this.props.login)
        }
        else {    
            this.validator.showMessages();
            this.forceUpdate();
        }
        
    }

    render(){
        // const {navigation} = this.props
        return(
            <View style={{flex:1}}>
                <View style={CommonStyle.content}>
                    <View style={CommonStyle.contentBox}>
                        <ScrollView>

                            <View>
                                <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                    <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                        <Text>Email</Text>
                                    </View>
                                    <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                        <TextInput  
                                            style={[CommonStyle.textInput]}  
                                            
                                            onChange={this.props.login_EmailOnChange} 
                                            value={this.props.login.email}
                                        />
                                    </View>
                                </View>

                                <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                    <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                        
                                    </View>
                                    <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                        {this.validator.message('email', this.props.login.email, 'required|email')!=undefined ? 
                                            <View style={styles.Bottom}>
                                                <Text style={CommonStyle.validateError}>
                                                    {this.validator.message('email', this.props.login.email, 'required|email')}
                                                </Text> 
                                            </View>
                                            
                                            :
                                            null
                                        }
                                    </View>
                                </View>


                                <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                    <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                        <Text>Password</Text>
                                    </View>
                                    <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                        <TextInput  
                                            style={[CommonStyle.textInput]}  
                                            onChange={this.props.login_PasswordOnChange} 
                                            value={this.props.login.password}
                                            secureTextEntry={true}
                                        />
                                    </View>
                                </View>

                                <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                    <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                        
                                    </View>
                                    <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                        {this.validator.message('password', this.props.login.password, 'required|min:10|max:12')!=undefined ? 
                                            <View style={styles.Bottom}>
                                                <Text style={CommonStyle.validateError}>
                                                    {this.validator.message('password', this.props.login.password, 'required|min:10|max:12')}
                                                </Text> 
                                            </View>
                                            
                                            :
                                            null
                                        }
                                    </View>
                                </View>

                            

                                {this.props.tempoData.errorMessage  ?
                                    <View style={[CommonStyle.marginT,CommonStyle.marginB]}>
                                        <Text style={[CommonStyle.validateError,CommonStyle.textCenter]}>
                                            {this.props.tempoData.errorMessage}
                                        </Text> 
                                    </View>
                                    :
                                    null
                                }

                                {this.props.tempoData.createLoad ?
                                    <TouchableOpacity>
                                        <View style={[CommonStyle.buttonBox]}>
                                            <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}><Text><ActivityIndicator/></Text></Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={this.loginAPI}>
                                        <View style={[CommonStyle.buttonBox]}>
                                            <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}>Login</Text>
                                        </View>
                                    </TouchableOpacity>
                                }


                               
                            </View>

                            <TouchableOpacity style={[CommonStyle.marginB]} onPress={this.props.goCreatAccountLink}>
                                <View style={CommonStyle.marginT}>
                                    <Text style={[CommonStyle.textCenter,CommonStyle.link]}>Create Account</Text>
                                </View>
                            </TouchableOpacity>

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
            </View>
        )
    }
}