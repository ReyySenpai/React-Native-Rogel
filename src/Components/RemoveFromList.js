
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RemoveFromList = ({ handleList }) => {
  const removeFromList = () => {
    handleList();
  };

  return (
    <View style={styles.myList}>
      <TouchableOpacity onPress={removeFromList}>
        <Text style={styles.buttonText}>Remove From List -</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  myList: {
    position: 'absolute',
    top: 250,
    right: 60,
    padding: 5,
    backgroundColor: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default RemoveFromList;
