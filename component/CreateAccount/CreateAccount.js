import React from 'react'
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import SimpleReactValidator from 'simple-react-validator';
import Action from "../../actionCreator/CreateAccount"
import { GAMBannerAd, BannerAdSize, TestIds,} from 'react-native-google-mobile-ads'; 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class CreateAccount extends React.Component{
    constructor(props){
        super(props)
        this.validator = new SimpleReactValidator();
        this.emailValidator = new SimpleReactValidator();
        this.state={
            email:"",
            name:"",
            password:"",
            confirmPassword:"",
        }
    }

    createAccountAPI = () => {
   
        if (this.validator.allValid()){
            Action.CreateAccount_openLoadingForCreateAcc()
            var value=this.props.createAccount
            Action.VerifyNAccount(value)
        }
        else {    
            this.validator.showMessages();
            this.forceUpdate();
        }
        
    }

    // validateForm() {
    //     if (this.validator.allValid()) {
    //        var value=this.props.createAccount
    //        Action.VerifyNAccount(value)
           
    //     } else {
    //         this.validator.showMessages();
    //         this.forceUpdate();
    //     }
    // }


    createAccount_getOTPAPI=()=>{
        // Action.createAccount_openLoadingForGetOTP()
        // Action.createAccount_GetOTPAPI(this.props.createAccount.email)

        
        
        if (this.emailValidator.allValid(this.props.email)) {
            Action.createAccount_openLoadingForGetOTP()
            Action.createAccount_GetOTPAPI(this.props.email)
        }
        else{
            this.emailValidator.showMessages();
            this.forceUpdate();
        }
    }

    
    testingOTP=()=>{
        Action.testingOTP()
    }

    

    

    render(){
        
        return(
            <View style={CommonStyle.content}>
                <View style={CommonStyle.contentBox}>
                    <ScrollView style={{backgroundColor:'#fff'}}>

                        <View>
                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    <Text>Name</Text>
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                    <TextInput  
                                        style={[CommonStyle.textInput]}  
                                        onChange={this.props.createAccount_NameOnChange} 
                                        value={this.props.createAccount.name}
                                    />
                                </View>
                            </View>

                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                    {this.validator.message('name', this.props.createAccount.name, 'required|min:10|max:40')!=undefined ? 
                                        <View style={styles.Bottom}>
                                            <Text style={CommonStyle.validateError}>
                                                {this.validator.message('name', this.props.createAccount.name, 'required|min:10|max:40')}
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
                                        onChange={this.props.createAccount_PasswordOnChange} 
                                        value={this.props.createAccount.password}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>

                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                    {this.validator.message('password', this.props.createAccount.password, 'required|min:10|max:12')!=undefined ? 
                                        <View style={styles.Bottom}>
                                            <Text style={CommonStyle.validateError}>
                                                {this.validator.message('password', this.props.createAccount.password, 'required|min:10|max:12')}
                                            </Text> 
                                        </View>
                                        
                                        :
                                        null
                                    }
                                </View>
                            </View>

                            


                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    <Text>Address</Text>
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                    <TextInput  
                                        multiline={true} 
                                        textAlignVertical="top"
                                        style={[CommonStyle.textArea]}  
                                        onChange={this.props.createAccount_AddressOnChange} 
                                        value={this.props.createAccount.address}
                                    />
                                </View>
                            </View>

                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                    {this.validator.message('address', this.props.createAccount.address, 'required')!=undefined ? 
                                        <View style={styles.Bottom}>
                                            <Text style={CommonStyle.validateError}>
                                                {this.validator.message('address', this.props.createAccount.address, 'required')}
                                            </Text> 
                                        </View>
                                        
                                        :
                                        null
                                    }
                                </View>
                            </View>



                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    <Text>Email</Text>
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]}>
                                    <View style={[CommonStyle.marginB,CommonStyle.row]}>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column]}>
                                            <TextInput  
                                                style={[CommonStyle.textInput]}  
                                                onChange={this.props.createAccount_EmailOnChange}
                                                value={this.props.createAccount.email}
                                                
                                            />
                                        </View>

                                        <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                            {this.props.tempoData.getOTPLoading ?
                                                <TouchableOpacity>
                                                    <View style={[CommonStyle.buttonBox]}>
                                                        <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}><Text><ActivityIndicator/></Text></Text>
                                                    </View>
                                                </TouchableOpacity>
                                                
                                                :
                                                <TouchableOpacity onPress={this.createAccount_getOTPAPI}>
                                                    <View style={[CommonStyle.buttonBox]}>
                                                        <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}>Get Otp</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            }

                                           
                                        </View>
                                    </View>
                                    
                                </View>
                                
                            </View>

                            

                            <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                    
                                </View>
                                <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                    {this.emailValidator.message('email', this.props.email, 'required|email')!=undefined ?                                         
                                        <Text style={CommonStyle.validateError}>
                                            sfsd
                                            {this.emailValidator.message('email', this.props.email, 'required|email')}
                                        </Text> 
                                        :
                                        null
                                    }

                                    <Text style={CommonStyle.validateError}>
                                        
                                        {this.validator.message('email', this.props.createAccount.email, 'required|email')}
                                    </Text> 

                                    {this.props.error ? 
                                        <View style={styles.Bottom}>
                                            <Text style={CommonStyle.validateError}>
                                                {this.props.error}
                                            </Text> 
                                        </View>
                                        :
                                        null
                                    }
                                </View>
                            </View>

                            {this.props.tempoData.getOTP ?
                                <View>
                                    <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                        <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                            <Text>OTP</Text>
                                        </View>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                            <TextInput  
                                                style={[CommonStyle.textInput]}  
                                                onChange={this.props.createAccount_OTPOnChange} 
                                                value={this.props.createAccount.otp}
                                                keyboardType = 'numeric'
                                                maxLength={6}
                                            />
                                        </View>
                                    </View>

                                    <View  style={[CommonStyle.marginB,CommonStyle.row]}>
                                        <View style={[CommonStyle.oneBox,CommonStyle.column]}>
                                            
                                        </View>
                                        <View style={[CommonStyle.twoBox,CommonStyle.column]} >
                                            {this.validator.message('otp', this.props.createAccount.otp, 'required|max:6')!=undefined ? 
                                                <View style={styles.Bottom}>
                                                    <Text style={CommonStyle.validateError}>
                                                        {this.validator.message('otp', this.props.createAccount.otp, 'required|max:6')}
                                                    </Text> 
                                                </View>
                                                
                                                :
                                                null
                                            }
                                        </View>
                                    </View>

                                    {this.props.tempoData.getCreateLoading ?
                                        <TouchableOpacity>
                                            <View style={[CommonStyle.buttonBox]}>
                                                <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}><Text><ActivityIndicator/></Text></Text>
                                            </View>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={this.createAccountAPI}>
                                            <View style={[CommonStyle.buttonBox]}>
                                                <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}>Create</Text>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                        
                                    
                                </View>
                                :
                                null
                            }


                            {/* <TouchableOpacity onPress={this.testingOTP}>
                                <View style={[CommonStyle.buttonBox]}>
                                    <Text style={[CommonStyle.paddingT,CommonStyle.paddingB,CommonStyle.buttonText]}>Testing with</Text>
                                </View>
                            </TouchableOpacity> */}

                            
                            

                           

                            {this.props.tempoData.errorMessage  ?
                                <View style={CommonStyle.marginT}>
                                    <Text style={[CommonStyle.validateError,CommonStyle.textCenter]}>
                                        {this.props.tempoData.errorMessage}
                                    </Text> 
                                </View>
                                :
                                null
                            }
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
            </View>
        )
    }
}