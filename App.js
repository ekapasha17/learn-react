import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions,TextInput,Image } from 'react-native';
import Mybanan from './src/components/banana/banana';
import Mybutton from './src/components/touch_opacity/button';
/*class Blink extends Component {
    constructor(props){
      super(props);
      this.state = {showText: true};
      setInterval(() => {
        this.setState({ showText: !this.state.showText });
      }, 1000);
    }

    render() {
      let mydisplay = this.state.showText ? this.props.text : '';
      return (
        <Text>{mydisplay}</Text>
      );
    }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});*/

export default class StarterPage extends Component{
  constructor(props) {
    super(props);
    this.state = { textF: '',textS: '' };
  }
  render() {
    let pic = {
      uri: 'http://www.centogram.com/sites/default/files/react-logo.png'
    };
    /*let mywidth = Dimensions.get("window").width;
    let myheight = Dimensions.get("window").height;*/
    return (
        /*<View style={{width: mywidth, height: myheight, backgroundColor: 'skyblue'}}>
          <Text>Width: {}</Text>
          <Text>height: {Dimensions.get("window").height}</Text>
          <Mybanan/>
        </View>*/
         <View style={styles.container}>
           <View style={styles.imgwrapper}>
              <Image source={pic} style={{width: 193, height: 200,}}/>
            </View>
           <View style={styles.twrapper}>
            <TextInput style={styles.textinput} underlineColorAndroid ='transparent' value={this.state.textF} 
            onChangeText={(textF) => this.setState({textF})} placeholder = 'Firstvalue' placeholderTextColor = '#A8B2A8'/>
          </View>

          <View style={styles.twrapper}>
            <TextInput style={styles.textinput} underlineColorAndroid ='transparent' value={this.state.textS} 
            onChangeText={(textS) => this.setState({textS})} placeholder = 'Secondvalue' placeholderTextColor = '#A8B2A8'/>
          </View>

           <Mybutton TextF={this.state.textF} TextS={this.state.textS}/>
        </View>
    );
  }
}
const deviceswidth  = Dimensions.get("window").width;
const devicesheight  = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor: 'black', justifyContent : 'center',paddingTop : devicesheight * 0.1
    },twrapper: {
      height: devicesheight * 0.1, borderColor: 'gray',borderWidth : 1 ,marginTop : 10,backgroundColor : '#F4F5F4',borderRadius: 21,padding : 10, alignItems : 'flex-start',justifyContent : 'center'
    },
    textinput: {
      color : 'red',
      width : deviceswidth - 20
    },
    imgwrapper : {
      alignItems : 'center'
    }
  });

AppRegistry.registerComponent('StarterPage', () => StarterPage);