import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/Login.js';
import SignupScreen from './components/Signup';
import PostAdScreen from './components/PostAd';
import EditAdScreen from './components/EditAd';
import UpdateAdScreen from './components/UpdateAd';
import ProfileScreen from './components/Profile';
import EditProfileScreen from './components/EditProfile';
import Home from './components/home.js';
import MobileAds from './components/MobileView.js';
import Detail from './components/Details.js';
import adminHome from './components/AdminHome.js';
import adBrand from './components/AdBrands.js';
import { userM, userM2 } from './components/UserManagement.js';
import { adM, adM2 } from './components/AdManagement.js';
import MyAds from './components/MyAds.js';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginStack = createNativeStackNavigator();

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Login"
        component={LoginStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Admin"
        component={AdminStackScreen}
         options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="User"
        component={MyTabs}
         options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator initialRouteName="">
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: 'LOGIN',
        }}
      />
      <LoginStack.Screen
        name="Sign"
        component={SignupScreen}
        options={{
          headerTitle: 'SIGN-UP',
        }}
      />
      <LoginStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MobileAds" component={MobileAds} />
      <HomeStack.Screen name="Details" component={Detail} />
      <HomeStack.Screen
        name="PostAd"
        component={PostAdScreen}
        options={{
          headerTitle: 'POST A NEW AD',
        }}
      />
      <HomeStack.Screen
        name="EditAd"
        component={EditAdScreen}
        options={{
          headerTitle: 'YOUR AD',
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'PROFILE PAGE',
        }}
      />
      <HomeStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'EDIT YOUR PROFILE',
        }}
      />
      <HomeStack.Screen
        name="MyAd"
        component={MyAds}
        options={{
          headerTitle: 'VIEW YOUR ADS',
        }}
      />
      <HomeStack.Screen
        name="UpdateAd"
        component={UpdateAdScreen}
        options={{
          headerTitle: 'EDIT YOUR ADS',
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'PROFILE PAGE',
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'EDIT YOUR PROFILE',
        }}
      />
    </ProfileStack.Navigator>
  );
}

const AdminStack = createNativeStackNavigator();
function AdminStackScreen() {
  return (
    <AdminStack.Navigator initialRouteName="AdminHome">
      <AdminStack.Screen name="AdminHome" component={adminHome} />
      <AdminStack.Screen name="UserManage" component={userM} />
      <AdminStack.Screen name="UserManageDetails" component={userM2} />
      <AdminStack.Screen name="AddBrand" component={adBrand} />
      <AdminStack.Screen name="AdManage" component={adM} />
      <AdminStack.Screen name="AdManageDetails" component={adM2} />
    </AdminStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="logout"
      shifting={true}
      labelStyle={{ fontSize: 15 }}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color="pink" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color="pink" size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
<AdminStackScreen />;
export default function App() {
  const [admin, setAdmin] = React.useState(false);
  const [start, setStart] = React.useState(true);
  const [user, setUser] = React.useState(false);
  React.useEffect(() => {}, []);

  const checkUser = (user) => {
    console.log('appjs ', user);
    if (user == 'user') {
      setStart(false);
      setUser(true);
    } else if (user === 'admin') {
      setAdmin(true);
      setStart(false);
    }
  };

  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}
