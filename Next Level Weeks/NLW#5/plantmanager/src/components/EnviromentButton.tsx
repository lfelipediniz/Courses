import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EviromentButton({
  title,
  active = false,
  ...rest
}: EviromentButtonProps) {
  return (
    <RectButton style={[
        styles.container,
        active && styles.coitainerActive
        ]} {...rest}>

      <Text style={[
          styles.text,
          active && styles.textActive
          ]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStartColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginRight: 5
  },
  coitainerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
