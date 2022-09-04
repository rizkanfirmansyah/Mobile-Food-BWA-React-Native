import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2} from '../../../assets';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      marginHorizontal: 'auto',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
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
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};
const Recomended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
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
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
