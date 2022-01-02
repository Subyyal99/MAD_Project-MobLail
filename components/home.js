import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import Icon from 'react-native-vector-icons/FontAwesome';

 

const Home = ({ navigation }) => {
  var id;
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      const val=JSON.parse(jsonValue);
      id = val.id;
      console.log("value",id);
      //console.log(jsonValue)
    } catch(e) {
      // error reading value
    }
  }

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('user')
  //    // if(value !== null) {
  //       // value previously stored
  //       console.log("new home")
  //     //}
  //   } catch(e) {
  //     // error reading value
  //   }
  // }
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ImageBackground
          style={(styles.image, styles.body)}
          source={require('../assets/back.jpg')}>
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => {
              navigation.navigate('MobileAds');
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.txt}>Mobiles</Text>
              <Icon name="mobile" size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('MyAd');
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.txt}>My Ads</Text>
              <Icon name="table" size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Ad');
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.txt}>Favourite</Text>
              <Icon name="heart" size={24} color="red" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('PostAd');
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.txt}>Post An Ad</Text>
              <Icon name="clipboard" size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.txt}>Profile</Text>
              <Icon name="user-circle" size={24} />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    padding: 5,
    //alignContent: 'center'
  },

  button: {
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: '50%',
    height: '15%',
    backgroundColor: 'pink',

    // marginTop: 10
  },

  image: {
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    //resizeMode: "contain"
  },
  txt: {
    fontWeight: 'bold',
    marginRight: '5%',
    fontSize: 20,
  },
});

export default Home;
