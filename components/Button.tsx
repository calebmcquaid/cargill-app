/* eslint-disable import/extensions */
import React from "react";
import { Pressable, Text } from "react-native";
import { COLORS, TABLET_TYPOGRAPHY } from "../project.config";

const Button = ({
  selected,
  label,
  onPress,
}: {
  selected: boolean;
  label: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: selected ? COLORS.primary : COLORS.gray.lighterBlack,
        borderRadius: 8,
        width: 126,
        height: 39,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...TABLET_TYPOGRAPHY.h4,
          fontWeight: "500",
          color: selected ? COLORS.gray.black : COLORS.tGray[6],
        }}
        numberOfLines={1}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
