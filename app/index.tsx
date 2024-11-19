import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import {
  useFonts,
  NanumGothicCoding_400Regular,
  NanumGothicCoding_700Bold,
} from '@expo-google-fonts/nanum-gothic-coding';
import {
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import SVGImg from '../assets/images/app-logo.svg';
import SplashScreen from "./SplashScreen";

export default function Index() {
  let [fontsLoaded] = useFonts({
    NanumGothicCoding_400Regular,
    NanumGothicCoding_700Bold,
    Nunito_700Bold,
  });

  const leaveDate = new Date("2024-12-09 07:00:00");
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor((leaveDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((leaveDate.getTime() - today.getTime()) / (1000 * 60 * 60) % 24);
  const minutes = Math.floor((leaveDate.getTime() - today.getTime()) / (1000 * 60) % 60);
  const seconds = Math.floor((leaveDate.getTime() - today.getTime()) / 1000 % 60);

  return (
    <SafeAreaView style={styles.container}>
      {fontsLoaded ? (
      <>
        <SVGImg style={styles.image} width={100} height={200} />
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {String(days).padStart(2, '0')}:
            {String(hours).padStart(2, '0')}:
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </Text>
        </View>
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>내가 한국에 갈 때까지</Text>
          <Text style={styles.captionTwo}>Days Until Korea</Text>
        </View>
      </>
      ) : <SplashScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 0,
  },
  image: {
    top: 0,
    position: "absolute",
  
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: 50,
    fontFamily: "Nunito_700Bold",
    marginHorizontal: 10,
  },
  captionContainer: {
    marginTop: -10,
  },
  caption: {
    fontSize: 30,
    fontFamily: "NanumGothicCoding_400Regular",
    marginTop: 20,
    textAlign: "center",
  },
  captionTwo: {
    fontSize: 26,
    fontFamily: "NanumGothicCoding_400Regular",
    color: "#888",
    textAlign: "center",
  },
});