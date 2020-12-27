import React , {Component} from 'react';
import{TextInput , TouchableOpacity, View, Text , ScrollView} from 'react-native';
import {connect} from 'react-redux';
import { setUserInfo } from './actions';


class ToDoListWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            name112:"ISMAYIL",
            phoneNumber112:"ELGIZ"
        }
    };
    // addData () {
    //     this.props.addedName("a");
    //     //this.addedPhoneNumber(this.props.phoneNumberForList);
    // }
    // collectAllItems(){
    //     {this.arrayOfitemsCollect.map((item , index) => (
    //         this.arrayOfItems.push(this.nameTaken , this.phoneNumberTaken)       
    //     ))}
    // }
    render() {
        return(
            <ScrollView>
                <View style={{height:50 , backgroundColor:"teal" , justifyContent:"center" , alignItems:"center"}}>
                <Text style={{fontSize:30 , color:"white" , fontStyle:"italic"}}>
                    Contacts
                </Text>
            </View>
            <View>
                <TextInput onChangeText={(text) => (this.name112 = text)} placeholder="Input name" />
                <TextInput onChangeText={(text) => (this.phoneNumber112 = text)} placeholder="Input numbers"/>
                <TouchableOpacity onPress={() => {this.props.valuesForInfo(this.name112 , this.phoneNumber112)}} style={{justifyContent:"center" , alignItems:"center" , backgroundColor:"teal" , height:50}}>
                    <Text style={{fontSize:30 , color:"white", fontStyle:"italic"}}>
                        ADD
                    </Text>
                </TouchableOpacity>
                {this.props.state.usersInfo.map((item , index ) => (
                <View key={index} style={{justifyContent:"center" , alignItems:"flex-start"}}>
                <Text style={{color:"teal" , marginTop:40 , fontSize:20 , borderTopWidth:2 , borderTopColor:"teal" , width:"100%"}}>
                   Name:{item.userName}    Phone:{item.userNumber}
                </Text>
            </View>))}
            </View>
            </ScrollView>
        )
    }
}
function mapStateToProps(state) {
    return {
        state,
        userName : state.usersInfo.userName,
        userNumber : state.usersInfo.userNumber,
        // userName:state.userName,
        // userNumber:state.userNumber,
    };
  }
function mapDispatchToProps(dispatch) {
    return {
        valuesForInfo:(name , number) => dispatch(setUserInfo(name , number)),
        
        // addedName(value) {dispatch(setUserName(value))},
        // addedPhoneNumber(value) {dispatch(setUserPhoneNumber(value))},
    };
  }
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(ToDoListWork);