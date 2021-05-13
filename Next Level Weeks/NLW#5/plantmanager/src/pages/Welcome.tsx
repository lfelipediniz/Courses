import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import { Button } from "../components/Button";

export function Welcome() {
  const [visable, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(true);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage {"\n"} your plants easily</Text>

      {visable && <Image source={wateringImg} style={styles.image} />}

      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remind you
        whenever you need
      </Text>

      <Button title="Image" onPress={handleVisibility} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 28,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
});
