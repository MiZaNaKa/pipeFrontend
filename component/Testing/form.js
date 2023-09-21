import React from 'react'
import {View,Text,TextInput,StyleSheet,Button,ScrollView} from 'react-native'
import CommonStyle from "../../commonStyle/commonStyle"
import SimpleReactValidator from 'simple-react-validator';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.validator = new SimpleReactValidator();
        this.state={
            email:"",
            name:"",
            password:"",
            confirmPassword:""
        }
        this.emailOnChange=this.emailOnChange.bind(this)
        this.validateForm=this.validateForm.bind(this)
    }

    componentDidMount= ()=> {
        // this.validator = new SimpleReactValidator();
    }

    
    validateForm() {
        if (this.validator.allValid()) {
           console.log("hello")
           
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    emailOnChange = (value) => {
        this.setState({
            email:value.nativeEvent.text
        })
    }

    render(){
        
        return(
            <View style={{flex:1}}>
                <ScrollView>
                    
                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Email</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                value={this.state.email}
                                style={[CommonStyle.textArea,CommonStyle.marginB]}  
                                onChange={this.emailOnChange}
                            />

                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>{this.validator.message('email', this.state.email, 'required')}</Text>
                        </View>
                    </View>


                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Name</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                style={[CommonStyle.textArea,CommonStyle.marginB]}  
                            />

                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>{this.validator.message('name', this.state.name, 'required')}</Text>
                        </View>
                    </View>

                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Password</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                style={[CommonStyle.textArea,CommonStyle.marginB]}  
                            />

                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>{this.validator.message('name', this.state.name, 'required')}</Text>
                        </View>
                    </View>


                    <View style={[CommonStyle.row,CommonStyle.marginT,CommonStyle.allPadding]}>
                        <View style={CommonStyle.column1}><Text>Confirm Password</Text></View>
                        <View style={CommonStyle.column2}>
                            <TextInput 
                                style={[CommonStyle.textArea,CommonStyle.marginB]}  
                            />

                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}>{this.validator.message('name', this.state.name, 'required')}</Text>
                        </View>
                    </View>

                    <View style={[CommonStyle.marginB]}  >
                        {this.props.error ?
                            <Text style={[CommonStyle.error,CommonStyle.txtcenter]}  >{this.props.error}</Text>
                            :
                            null
                        }
                    </View>
                    
                    

                    <Button title='Save' onPress={this.validateForm}/>


                    

                </ScrollView>   
            </View>
        )
    }
}