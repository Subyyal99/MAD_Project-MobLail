import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/Login.js'
import SignupScreen from './components/Signup'
import PostAdScreen from './components/PostAd'
import EditAdScreen from './components/EditAd'
import UpdateAdScreen from './components/UpdateAd'
import ProfileScreen from './components/Profile'
import EditProfileScreen from './components/EditProfile'
import Home from './components/home.js';
import MobileAds from './components/MobileView.js';
import Detail from './components/Details.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginScreen}
     options={{
      headerTitle : "LOGIN" ,
        }}/> 
     <LoginStack.Screen name="Sign" component={SignupScreen}
     options={{
      headerTitle : "SIGN-UP" 
        }}/>
                    
    </LoginStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home}/>
    <HomeStack.Screen name='MobileAds' component={MobileAds}/>
    <HomeStack.Screen name='Details' component={Detail}/> 
    <HomeStack.Screen name="PostAd" component={PostAdScreen}
     options={{
      headerTitle : "POST A NEW AD" 
        }}/> 
     <HomeStack.Screen name="EditAd" component={EditAdScreen}
     options={{
      headerTitle : "EDIT AN AD" 
        }}/> 
     <HomeStack.Screen name="Profile" component={ProfileScreen}
     options={{
      headerTitle : "PROFILE PAGE" 
        }}/>
     <HomeStack.Screen name="EditProfile" component={EditProfileScreen}
     options={{
      headerTitle : "EDIT YOUR PROFILE" 
        }}/>  
      
    
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
     <ProfileStack.Screen name="Profile" component={ProfileScreen}
     options={{
      headerTitle : "PROFILE PAGE" 
        }}/>
     <ProfileStack.Screen name="EditProfile" component={EditProfileScreen}
     options={{
      headerTitle : "EDIT YOUR PROFILE" 
        }}/>  
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
   <Tab.Navigator initialRouteName= 'logout'
      shifting={true}
      labelStyle={{ fontSize: 15 }}
      screenOptions={{ headerShown: false }}>

        <Tab.Screen name="home" component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color='pink' size={26} />),
        }} />
        <Tab.Screen
        name="profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color='pink' size={26} />),
        }}/>
        <Tab.Screen name="logout" component={LoginStackScreen}
        options={{
          tabBarLabel: 'Exit',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color='pink' size={26} />)
        }}
       />

      
      </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
   <MyTabs />
    </NavigationContainer>
  );
}
