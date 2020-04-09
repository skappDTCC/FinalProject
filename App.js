// https://reactnavigation.org/docs/en/navigating.html
//sourced from https://snack.expo.io/@jinsungpsu/react-native-navigation-stack-demo

//Delaware Technical Community College 
//ITN263-4C1 Mobile App Development (Spring 2020 S1)
//Final Project
//Assignment Page: https://mycourses.dtcc.edu/d2l/lms/dropbox/user/folder_submit_files.d2l?db=67982&grpid=0&isprv=0&bp=0&ou=39945
//Due Friday, April 24th 2020. 11:30 PM EST (Eastern Standard Time)
//Samuel Warrington Kapp

{/*Importing Components From React Native*/}
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';
import { WebView } from 'react-native-webview';

//Manually Specifies the Expo Font Library to Patch the Issue Preventing the Program from Running In the Latest REACT NATIVE version. 
import * as Font from 'expo-font';


{/*Home Screen Navigation Menu*/}
function HomeScreen({ navigation }) {
  return (
    <View
    
      //Body Container 
      id="Body Container"
      //Specifying the Style of the Body Container 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      {/*Image Container */}
      <View id="Image Container">
        {/*Image */}
        <Image
          resizeMode={'contain'}
          style={{ width: 300, height: 180 }}
          /*Image Source*/
          source={require('/img/Banner.jpg')}
        />
      </View>

      {/*Card Container */}
      <div id="Card Container">
        {/* Card Header */}
        <Card title="Mindfulness Website | Home ">
          {/*Card Subtitle*/}
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Text>

          {/*Form Button Container*/}
          <View style={styles.container}>
          {/*Button Styling*/}
            <View style={styles.button}>
              <Button
                //Button Title
                title="Find Therapy Center"
                //OnPress Function > Navigates to the Form Menu 
                onPress={() => navigation.navigate('Map')}
              />
            </View>
            
            {/*Summary Button Container */}
            <View style={styles.button}>
              <Button
                //Button Title
                title="Schedule Appointment"
                //OnPress Function > Navigates to the Summary Screen
                onPress={() => navigation.navigate('Form')}
              />
            </View>

            {/*Summary Button Container */}
            <View style={styles.button}>
              <Button
                //Button Title
                title="Generate Random Image"
                //OnPress Function > Navigates to the Summary Screen
                onPress={() => navigation.navigate('Generator')}
              />
            </View>
          </View>
        </Card>
      </div>
    </View>
  );
}

{/* Form Screen */}
function ImageGenerator({ navigation }) {
  //Random Image Code Sourced from LHIOUI at           https://stackoverflow.com/questions/38043170/rendering-a-random-card-image-requiring-unknown-module 
  this.rImages = [require('img/1.gif'),require('img/2.gif'),require('img/3.gif')]
  var randomInt = Math.floor(Math.random() * this.rImages.length)
  var rImage = this.rImages[randomInt]
  return (
    //Body Container 
    <View
      id="Body"
      //Specifying the Style of the Body Container 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
      {/*Card Container */}
      
      <Image 
        source={rImage}
        resizeMode="contain"
        style={{ width: 300, height: 200 }}
      />

      {/*Card Container */}
      <div id="Card Container" style={{ paddingBottom: 100 }}>
        {/* Card Header */}
        <Card title="Mindfulness Website | Generator">
          {/*Card Subtitle*/}
          
          {/*Form Button Container*/}
          <View style={styles.container}>
          {/*Button Styling*/}
            <View style={styles.button}>
              <Button
                //Button Title
                title="Generate Image"
                //OnPress Function > Navigates to the Form Menu 
                onPress={() => navigation.navigate('Map')}
                color="black"
              />
            </View>


            {/*Summary Button Container */}
            <View style={styles.button}>
              <Button
                //Button Title
                title="Return to Home Page"
                //OnPress Function > Navigates to the Summary Screen
                onPress={() => navigation.navigate('Home')}
                color="black"
              />
            </View>
          </View>
        </Card>
      </div>
    </View>
  );
}

{/*Summary Screen Menu*/}
function MapScreen({navigation}) {
  return (
    //Body Container 
    <View id="Body" style={{flex: 1,}}>
       <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    </View>
  )
}

const Stack = createStackNavigator();

{/*Navigation Function*/}
{/* REQUIRED FOR NAVIGATION TO WORK PROPERLY. DO NOT REMOVE*/}

function App() {
  return (
    //Navigation Container
    <NavigationContainer>
      {/*DEFINING THE DEFAULT SCREEN LOAD UPON BOOTING APP*/}
      <Stack.Navigator initialRouteName="Home">
        {/*DEFINING THE HOME SCREEN NAME */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*DEFINING THE FORM SCREEN NAME */}
        <Stack.Screen name="Generator" component={ImageGenerator} />
        {/*DEFINING THE SUMMARY SCREEN NAME */}
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;

{/*CSS Stylesheet*/}
const styles = StyleSheet.create({
  //Container Stylesheet
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  //Button Stylesheet
  button: {
    flex: 1,
    padding: 1,
    fontSize: 1,
  },

});
