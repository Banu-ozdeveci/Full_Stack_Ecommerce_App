import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../style/colors";

export const Bag = ({ isBagClicked = false, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Svg height={20} viewBox="0 0 512 512" width={20}>
        <Path
          d="m411.9 436.48-24.36-276c-1.83-20.79-18.96-36.48-39.84-36.48-4.797 0-8.7 3.9-8.7 8.7v43.03c0
                4.26-3.22 7.98-7.47 8.25-4.66.3-8.53-3.39-8.53-7.98v-93c0-45.77-37.23-83-83-83s-83 37.23-83 83v41h-24.7c-20.88 0-38.01
                15.69-39.84 36.48l-24.36 276c-2.05 23.325 16.343 43.52 39.85 43.52h264.1c23.51 0 41.9-20.198
                39.85-43.52zm-217.9-9.48h-58c-4.418 0-8-3.582-8-8s3.582-8 8-8h58c4.418 0 8 3.582 8 8s-3.582 8-8 8zm0-40h-58c-4.418
                0-8-3.582-8-8s3.582-8 8-8h58c4.418 0 8 3.582 8 8s-3.582 8-8 8zm113-263h-109.3c-4.8 0-8.7 3.9-8.7 8.7v43.03c0 4.26-3.22
                7.98-7.47 8.25-4.66.3-8.53-3.39-8.53-7.98v-93c0-36.94 30.06-67 67-67s67 30.06 67 67z"
          fill={isBagClicked ? COLORS.DARK : COLORS.TEXT}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    position: "absolute",
    right: 0,
    bottom: -16,
  },
});
