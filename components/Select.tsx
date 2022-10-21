/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TABLET_TYPOGRAPHY } from "../project.config";
import DropdownCaret from "./Icons/DropdownCaret";

export interface SelectProps {
  options: any;
  onSelect: (value: { data: any; idx: number }) => void;
  selected: string;
}

const Select = ({ options, onSelect, selected }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Pressable
        style={{
          paddingLeft: 20,
          paddingRight: 15,
          height: 39,

          marginVertical: 5,
          backgroundColor: "#333333",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: 8,
          justifyContent: "space-between",
          alignItems: "center",
          width: 150,
          flexDirection: "row",
          position: "relative",
          zIndex: 10,
        }}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={{ ...TABLET_TYPOGRAPHY.h4, fontWeight: "500" }}>
          {selected}
        </Text>
        <DropdownCaret />
      </Pressable>
      {!!isOpen && (
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 15,
            paddingVertical: 15,
            marginVertical: 5,
            backgroundColor: "#333333",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: 8,
            justifyContent: "center",
            width: 320,
            position: "absolute",
            zIndex: 15,
            top: 80,
          }}
        >
          {options?.map((each: any, idx: number) => {
            return (
              <Pressable
                key={idx}
                style={{ paddingVertical: 10 }}
                onPress={() => {
                  onSelect({ data: each, idx });
                  setIsOpen(!isOpen);
                }}
              >
                <Text style={{ ...TABLET_TYPOGRAPHY.h3 }}>{each.section}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </>
  );
};

export default Select;
