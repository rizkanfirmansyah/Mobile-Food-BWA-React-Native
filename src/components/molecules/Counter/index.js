import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcMinus, IcPlus} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMinus />
      </TouchableOpacity>
      <Text style={styles.count}>2</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    marginHorizontal: 10,
  },
});
