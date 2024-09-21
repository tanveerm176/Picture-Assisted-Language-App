// A common style that can be used in more than one component which can be define here, i found shadow, evlevation as common requirement in my projects. You can alter, add as you like.
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
//import {Font} from 'expo';

/*
export class customText extends React.Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Dosis-Bold': require('../assets/fonts/Dosis-Bold.ttf'),
      'Oxygen-Light': require('../assets/fonts/Oxygen-Light.ttf')
    });

    this.setState({fontLoaded: true });
  }
}

*/
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    //flex: 1,
    paddingBottom: 30,
    //paddingHorizontal: 30,
    backgroundColor: '#CBC2B9',
    width: windowWidth,
    //height: windowHeight,
    //flexDirection: 'row'
    //fontFamily: 'Dosis-Bold'
    //justifyContent: 'space-between',
    //alignItems: 'center'
    
    

  },

  gallery: {
    
    //flex: 2,
    //flexDirection: 'row',
    //justifyContent: 'space-evenly',
    
    //flexWrap: 'wrap',
    //paddingRight: 20,
    //marginLeft: 30
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
    width: windowWidth,
    //height: windowHeight,
    //paddingBottom: 30,
    alignItems: 'center',
    
    
    
    
    
  },


  sentenceButton: {
    //flex: 2,
    //flexDirection: 'column',
    //justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F4E4D5',
    
    borderRadius: 20,

    
    
  },

  newSentenceText: {
    //fontFamily: 'Dosis-Bold',
    //fontStyle: normal,
    marginTop: 20,
    //fontWeight: 'bold',
    fontSize: 25,
    
    //lineHeight: 25,
    //display: flex,
    //alignSelf: 'center',
    //flex: 1,
    //flexDirection: 'column',
    textAlign: 'center',
    //letterSpacing: 1,
    alignItems: 'center',
    color: '#000000',
    backgroundColor: '#F4E4D5',
    
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50

    
  },
  
  submitButton: {
    // flex: 1,
    // flexDirection: 'column',
    //justifyContent: 'space-between',
    //padding: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#84D2F4',
    height: 40,
    
    marginLeft: 140,
    marginRight: 140,
    marginBottom: 50,
    borderRadius: 20,
    marginHorizontal: 70

    
    
  },
  submitButtonText: {
    marginTop: 8,
    fontSize: 25,
    lineHeight: 25,
    //flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: 'white'
    
    
  },
  

  text: {
    //fontFamily: 'Dosis-Bold',
    //fontStyle: normal,
    fontWeight: 'bold',
    fontSize: 25,
    //lineHeight: 25,
    //display: flex,
    //alignSelf: 'center',
    //flex: 1,
    //flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    //letterSpacing: 1,
    // textShadowColor: '#000000',
    // textShadowOffset: {width: 0, height: 0},
    // textShadowRadius: 1.5,
    
    
    color: '#000000'
  },
});

export default styles;