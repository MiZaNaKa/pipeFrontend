import { Dimensions, StyleSheet, Platform } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
var style={
    content:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff'
    },
    contentBox:{
        width:'98%',
        marginLeft:'auto',
        marginRight:'auto',
        padding:10,
        marginBottom:30
    },
    row:{
        flexDirection:'row'
    },
    marL:{
        marginLeft:30
    },
    column25:{
        width:'25%'
    },
    labelTxt:{
        fontSize:18,
    },
    textCenter:{
        textAlign:'center'
    },
    border:{
        borderWidth:1,
        padding:10,
        borderColor:'#ccc'
    },
    marginB:{
        marginBottom:15
    },
    textInput:{
        padding:10,
        fontSize:18,
        borderColor:'#cfcfcf',
        borderWidth:1
    },
    textInputError:{
        padding:10,
        fontSize:18,
        borderColor:'red',
        borderWidth:1
    },
    dateInput:{
        padding:20,
        fontSize:18,
        borderColor:'#cfcfcf',
        borderWidth:1
    },
    textArea:{
        padding:20,
        fontSize:18,
        borderColor:'#cfcfcf',
        borderWidth:1
    },
    buttonViewBox:{
        width:'25%'
    },
    buttonBox:{
        backgroundColor:'#000',
        textAlign:'center',
        padding:9
    },
    buttonText:{
        color:'#fff',
        fontSize:13,
        textAlign:'center'
    },
    error:{
        color:'red'
    },
    txtcenter:{
        textAlign:'center'
    },
    validateError: {
        color: 'red',
        fontSize: screenWidth > 760 ? 18 : screenWidth > 500 ? 16 : 14,
        fontFamily: 'UbuntuMono',
    },
    oneBox:{
        flex:1
    },
    marginT:{
        marginTop:20
    },
    marginR10:{
        marginRight:10
    },
    column:{
        flexDirection:'column'
    },
    twoBox:{
        flex:2
    },
    BCImage: {
        position: 'relative',
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    CancelPress: {
        position: 'absolute',
        width: 20,
        height: 20,
        right: 0,
        top: 100
    },
    cancelBox: {
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 99
    },
    gridImage: {
        position: 'relative'
    },
    CancelPressImage: {
        width: 20,
        maxWidth: "100%",
        height: 20,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 999

    },
    imageUploadGrid: {
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    ImageUploadBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    ImageUploadText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 30,
    },
    formImageUploadBox:{
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        width: 100,
        height: 100,
    },
    formCancelBox:{
        width: 100,
        zIndex: 99
    },
    paddingT:{
        paddingTop:6
    },
    paddingB:{
        paddingBottom:6
    },
    iconImage:{
        with:25,
        height:25,
        marginLeft:'auto',
        marginRight:'auto'
    },
    halfBOx:{
        flex:0.5
    },
    margin10T:{
        marginTop:10
    },
    link:{
        color:'blue'
    },
    userLogo:{
        width:35,
        height:35,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:15
    },
    drawerContent:{
        flex:1,
        padding:15
    },
    refreshIcon:{
        with:30,
        height:30,
        alignSelf: 'flex-end'
    },
    dataNotFound:{
        textAlign:'center',
        marginTop:30,
        marginBottom:30
    },
    whiteButton:{
        textAlign:'center',
        width:150,
        borderWidth:1,
        marginLeft:'auto',
        marginRight:'auto',
        padding:15
    },
    borderBottom:{
        padding:10,
        margin:10,
        borderBottomWidth:1,
        borderBottomColor:'#cfcfcf'
    },
    title:{
        fontWeight:'900'
    },
    textBlue:{
        color:'blue'
    },
    checkBox:{
        width:20,
        height:20,
        marginRight:20
    },
    paddingAll:{
        padding:15
    }
    
    
    
}

export default style