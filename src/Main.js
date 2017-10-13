import React, {Component} from 'react';
import { View , Text } from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import CardSection from './ortak/CardSection';
import Spinner from  './ortak/Spinner';
import Button from './ortak/Button';

class Main extends Component {

state = { loggedIn:null };

componentWillMount(){
  firebase.initializeApp({

    apiKey: "AIzaSyCHch4CrwyEoqw2S8tDVsubcTJ93Z5vXgc",
    authDomain: "kimlikdogrulama-b75e9.firebaseapp.com",
    databaseURL: "https://kimlikdogrulama-b75e9.firebaseio.com",
    projectId: "kimlikdogrulama-b75e9",
    storageBucket: "kimlikdogrulama-b75e9.appspot.com",
    messagingSenderId: "208643488561"

  });

firebase.auth().onAuthStateChanged((user) => {

if(user){
  this.setState({loggedIn:true});
}else {
  this.setState({loggedIn:false});
}

});

}

clickLogout(){
firebase.auth().signOut(); 
}

renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
          <Button onPress={this.clickLogout.bind(this)}> Çıkış </Button>
          </CardSection>
        );
     case false:
     return(
        <LoginForm />
     );
      default:
      return(
        <View>
        <Spinner size="large"/>
        </View>
      );

    }
}


  render() {
    return(
      <View>
      <Header headerText="Giriş Ekranı" />
           {this.renderContent()}
      </View>
    );

  }


}

export default Main;
