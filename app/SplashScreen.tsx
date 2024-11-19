import React from 'react';
import { View, StyleSheet } from 'react-native';
import SVGImg from '../assets/images/app-logo.svg';

export default function SplashScreen() {
  return (
    <View>
      <SVGImg style={styles.image} width={100} height={200} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 100,
    height: 200,
  }
})