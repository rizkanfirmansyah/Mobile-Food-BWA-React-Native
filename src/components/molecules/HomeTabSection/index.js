import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2} from '../../../assets';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {ScrollView} from 'react-native-gesture-handler';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      marginHorizontal: 'auto',
    }}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#020202' : '#8D92A3',
          fontFamily: 'Poppins-Medium',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy1} />
      </View>
    </ScrollView>
  );
};
const Popular = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy1} />
      </View>
    </ScrollView>
  );
};
const Recomended = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy1} />
        <ItemListFood image={FoodDummy2} />
        <ItemListFood image={FoodDummy1} />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recomended,
});

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
