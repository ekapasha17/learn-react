import React, { Component } from 'react';
import {Alert,Button,TouchableOpacity,Dimensions,Text,View,StyleSheet } from 'react-native';

class Mybutton extends Component {
    
    render(){
        const onButtonPress = () => {
            if(this.props.TextF == '' && this.props.TextS == ''){
                Alert.alert('Fill up the textbox');
            }else if(this.props.TextF == ''){
                Alert.alert('Fill up the Firstvalue');
            }else if(this.props.TextS == ''){
                Alert.alert('Fill up the Secondvalue');
            }else{
                Alert.alert('Firstvalue : '+this.props.TextF,'Secondvalue : '+this.props.TextS); 
            }
        };
        
        return(
            <View style={{flex : 1,alignItems: 'center'}}>
                <TouchableOpacity onPress={onButtonPress} style = {{marginTop : 20,width :Dimensions.get("window").width * 0.8,height : Dimensions.get("window").height * 0.1,backgroundColor : '#2FCF2F',borderRadius: 25,alignItems: 'center',justifyContent : 'center'}} title="Press Me" accessibilityLabel="See an informative alert">
                    <Text style = {styles.bigblue}>Press Button</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  bigblue: {
    color: '#F4F5F4',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft : 5,
    paddingRight : 5
  }
});


export default  Mybutton;