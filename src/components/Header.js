import React from 'react';
import { Image, View } from 'react-native';
import styles from '../config/styles/styles';


const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        source ={require('../assets/images/logo.png')}
        style={styles.logo}  
      />
    </View>
  );
};

export default Header;