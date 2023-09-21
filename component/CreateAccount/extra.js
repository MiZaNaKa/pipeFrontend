import React from 'react'
import {View,Text,TextInput,StyleSheet,Button,ScrollView} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import SimpleReactValidator from 'simple-react-validator';
import Action from "../../actionCreator/CreateAccount"
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
        this.state={
            email:"",
            name:"",
            password:"",
            confirmPassword:""
        }
        
        this.validateForm=this.validateForm.bind(this)
    }

    validateForm() {
        if (this.validator.allValid()) {
           var value=this.props.createAccount
           Action.VerifyNAccount(value)
           
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    

    

    

    render(){
        
        return(
            <View style={{flex:1}}>
                <ScrollView>

                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Name</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                onChange={this.props.createAccount_NameOnChange}
                                style={[CommonStyle.textArea]} 
                                value={this.props.createAccount.name} 
                                maxLength={25}
                            />
                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>{this.validator.message('name', this.props.createAccount.name, 'required')}</Text>
                        </View>
                    </View>


                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Password</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                onChange={this.props.createAccount_PasswordOnChange}
                                style={[CommonStyle.textArea]} 
                                value={this.props.createAccount.password} 
                                maxLength={25}
                            />
                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>{this.validator.message('password', this.props.createAccount.password, 'required')}</Text>
                        </View>
                    </View>


                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Confirm Password</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                onChange={this.props.createAccount_ConfirmPasswordOnChange}
                                style={[CommonStyle.textArea]} 
                                value={this.props.createAccount.confirmPassword} 
                                maxLength={25}
                            />
                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>
                                {this.validator.message('confirmPassword', this.props.createAccount.confirmPassword, `required|in:${this.props.createAccount.password}` ,{messages: {in: 'Passwords need to match!'}})}
                            </Text> 
                        </View>
                    </View>

                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Email</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                onChange={this.props.createAccount_EmailOnChange}
                                style={[CommonStyle.textArea]} 
                                value={this.props.createAccount.email} 
                            />
                            <Text style={[CommonStyle.error]}>{this.validator.message('email', this.props.createAccount.email, 'required|email')}</Text>
                            {this.props.tempoData.error ?
                                <View style={CommonStyle.marginB}>
                                    <Text style={[CommonStyle.error]}  >{this.props.tempoData.error}</Text>
                                </View>
                                :
                                null
                            }
                            <Button title='Get OTP' onPress={this.props.createAccount_GetOTPAPI}/>
                        </View>
                    </View>

                    {this.props.tempoData.getOTP ?
                        <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                            <View style={CommonStyle.column1}><Text>OTP</Text></View>
                            <View style={CommonStyle.column2}>
                                <TextInput 
                                    onChange={this.props.createAccount_OTPOnChange}
                                    style={[CommonStyle.textArea]} 
                                    value={this.props.createAccount.otp} 
                                    maxLength={6}
                                />
                                <Text style={[CommonStyle.error]}>{this.validator.message('otp', this.props.createAccount.otp, 'required')}</Text>
                                {this.props.tempoData.error ?
                                    <View style={CommonStyle.marginB}>
                                        <Text style={[CommonStyle.error]}  >{this.props.tempoData.error}</Text>
                                    </View>
                                    :
                                    null
                                }
                                
                            </View>
                        </View>
                        :
                        null
                    }

                    {this.props.tempoData.getOTP ?
                        <Button title='Create' onPress={this.validateForm}/>
                        :
                        null
                    }

                    
                    

                </ScrollView>   
            </View>
        )
    }
}