import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        //header styles
    },
    logo: {
        //logo styles
    }
});
function MyHeader() {
    return (
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 100, height: 50, resizeMode: 'contain' }} // Adjust styles
      />
    );
  }
  
  export default MyHeader;
