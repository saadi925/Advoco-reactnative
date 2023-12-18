import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginScreen,
  MenuScreen,
  NotificationsScreen,
  ProfileScreen,
  RequestScreen,
  SearchModal,
  SettingsScreen,
  SignupScreen,
} from './src/screens';
import {SCREENS, STACKS} from './src/constants/Screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Header} from './src/components/Header';
import {UsersIcon} from './assets/UserIcon';
import {COLORS} from './src/constants/Theme';
import {HomeIcon, MenuIcon, NotificationIcon} from './assets';
import {PaymentScreen} from './src/screens/PaymentScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => <></>}}
          initialRouteName={STACKS.AUTH}>
          <Stack.Screen name={STACKS.AUTH} component={AuthStack} />
          <Stack.Screen name={STACKS.APP} component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => <></>, presentation: 'transparentModal'}}
      initialRouteName={SCREENS.Signup}>
      <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
      <Stack.Screen name={SCREENS.Signup} component={SignupScreen} />
    </Stack.Navigator>
  );
}
function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation}) => <Header navigation={navigation} />,
      }}
      initialRouteName={STACKS.HomeTabs}>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name={STACKS.HomeTabs} component={HomeTabs} />
        <Stack.Screen name={SCREENS.Search} component={SearchModal} />
        <Stack.Screen name={SCREENS.Profile} component={ProfileScreen} />
        <Stack.Screen name={SCREENS.Menu} component={MenuScreen} />
        <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
        <Stack.Screen
          name={SCREENS.PaymentSettings}
          component={PaymentScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          margin: 0,
          padding: 0,
        },
        header: () => <></>,
      }}>
      <Tab.Screen
        name={SCREENS.Home}
        options={{
          tabBarIcon: () => <HomeIcon fill="#fff" />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={SCREENS.Requests}
        options={{
          tabBarIcon: () => <UsersIcon size={32} fill={COLORS.text} />,
        }}
        component={RequestScreen}
      />
      <Tab.Screen
        name={SCREENS.Notifications}
        options={{
          tabBarIcon: () => <NotificationIcon now={5} fill={COLORS.text} />,
        }}
        component={NotificationsScreen}
      />
    </Tab.Navigator>
  );
}
