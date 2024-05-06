
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddToList = ({ handleList }) => {
  
  return (
    <View style={styles.myList}>
      <TouchableOpacity onPress={handleList}>
        <Text style={styles.buttonText}>Add to List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  myList: {
    position: 'absolute',
    left: 280,
    padding: 5,
    backgroundColor: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 6,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AddToList;
