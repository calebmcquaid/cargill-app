import React from "react";
import { Text, View } from "react-native";
import { COLORS, TABLET_TYPOGRAPHY } from "../../project.config";
import { CellItemProps } from "../content/types";

const Converter = ({
  text,
  superscript,
  i,
}: {
  text: string;
  superscript?: string;
  i: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: i === 0 ? 10 : 0,
      }}
    >
      {i === 0 && <View style={{ width: 10 }} />}
      <Text
        style={{
          ...TABLET_TYPOGRAPHY.paragraph,
          color: COLORS.gray.offWhite,
          fontSize: 20,
          lineHeight: 30,
        }}
      >
        {text}
      </Text>
      {!!superscript && (
        <Text
          style={{
            ...TABLET_TYPOGRAPHY.paragraph,
            color: COLORS.gray.offWhite,
            fontSize: 11,
            lineHeight: 18,
          }}
        >
          {superscript}
        </Text>
      )}
    </View>
  );
};
export const MainConverter = ({
  text,
  superscript,
  ...props
}: CellItemProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          ...TABLET_TYPOGRAPHY.paragraph,
          color: COLORS.gray.offWhite,
          fontSize: 20,
          lineHeight: 30,
          fontWeight: "700",
        }}
      >
        {text}
      </Text>
      {!!superscript && (
        <Text
          style={{
            ...TABLET_TYPOGRAPHY.paragraph,
            color: COLORS.gray.offWhite,
            fontSize: 11,
            lineHeight: 18,
            fontWeight: "700",
          }}
        >
          {superscript}
        </Text>
      )}
    </View>
  );
};
export const FooterConverter = ({
  text,
  superscript,
  ...props
}: CellItemProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {!!superscript && (
        <Text
          style={{
            ...TABLET_TYPOGRAPHY.paragraph,
            color: COLORS.gray.offWhite,
            fontSize: 11,
            lineHeight: 18,
          }}
        >
          {superscript}
        </Text>
      )}
      <Text
        style={{
          ...TABLET_TYPOGRAPHY.paragraph,
          color: COLORS.gray.offWhite,
          fontSize: 20,
          lineHeight: 30,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Converter;
