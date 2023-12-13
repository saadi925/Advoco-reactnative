import React from 'react';
import {AppText, Box} from '../components';

export function HomeScreen() {
  return <TabViewExample />;
}
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const Home = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const About = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;
const Profile = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  first: Home,
  second: About,
  third: Profile,
});

export function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Categories'},
    {key: 'third', title: 'Rankings'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
