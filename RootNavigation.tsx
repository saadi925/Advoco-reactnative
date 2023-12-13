import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SearchModal,
  SignupScreen,
} from './src/screens';
import {SCREENS, STACKS} from './src/constants/Screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Header} from './src/components/Header';
const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => <></>}}
          initialRouteName={STACKS.APP}>
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
      screenOptions={{header: () => <></>}}
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
      initialRouteName={SCREENS.Home}>
      <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name={SCREENS.Search} component={SearchModal} />
      </Stack.Group>
      <Stack.Screen name={SCREENS.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
