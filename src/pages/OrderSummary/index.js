import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="Your battter if you pay"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood image={FoodDummy1} items={14} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 19.000.000" />
        <ItemValue label="Driver" value="IDR 1.000.000" />
        <ItemValue label="Task 10%" value="IDR 1.500.00" />
        <ItemValue label="Total Price" value="IDR 21.500.00" />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Rizkan Firmansyah" />
        <ItemValue label="Phone No." value="08983901552" />
        <ItemValue label="Address" value="Setra Duta Soreang No.84" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>

      <View style={styles.button}>
        <Button text="Checkout Now" />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    paddingBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
