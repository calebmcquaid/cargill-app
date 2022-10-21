import React from "react";
import { Text, View } from "react-native";
import { Row, Table, TableWrapper } from "react-native-table-component";
import { COLORS, TABLET_TYPOGRAPHY } from "../../project.config";
import { CellItemProps, ResearchTableProps } from "../content/types";
import Converter, {
  FooterConverter,
  MainConverter,
} from "./TableTextConverter";

const DummyData: ResearchTableProps = {
  head: [
    { text: "1" },
    { text: "2" },
    { text: "3", superscript: "b" },
    { text: "4" },
  ],
  rows: [
    {
      mainData: {
        title: { text: "things", superscript: "a" },
        data: [
          { text: "hjhk", superscript: "a" },
          { text: "sdfs" },
          { text: "etw" },
        ],
      },
      subData: [
        {
          title: { text: "p" },
          data: [{ text: "vbxgf" }, { text: "fgnx" }, { text: "uyk" }],
        },
        {
          title: { text: "t" },
          data: [{ text: "cghm" }, { text: "ghm" }, { text: "yti" }],
        },
        {
          title: { text: "h", superscript: "100" },
          data: [
            { text: "shgf", superscript: "0" },
            { text: "sger" },
            { text: "fmk" },
          ],
        },
      ],
    },
  ],
};

const ResearchTable = (data: ResearchTableProps) => {
  const horizontalPadding = 70;
  const verticalPadding = 10;
  return (
    <View style={{ marginBottom: 100 }}>
      <Text
        style={{ ...TABLET_TYPOGRAPHY.h3, marginLeft: 50, marginBottom: 10 }}
      >
        {data?.title}
      </Text>
      <Table style={{ flexDirection: "column" }}>
        {/* HEADER: PRIMARY BACKGROUND */}
        <Row
          data={data.head?.map((each) => MainConverter(each))}
          style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: horizontalPadding,
            paddingVertical: verticalPadding,
          }}
        />
        {/* ROWS MAIN */}
        {data?.rows?.map((row, idx) => {
          return (
            <>
              <TableWrapper
                style={{
                  marginHorizontal: horizontalPadding,
                  marginVertical: verticalPadding,
                  alignItems: "center",
                }}
                key={idx}
              >
                {/* MAIN DATA*/}
                <Row
                  data={[
                    MainConverter(row.mainData.title),
                    ...(row.mainData?.data?.map((each) => Converter(each)) ??
                      []),
                  ]}
                />
              </TableWrapper>
              {/* ROWS SUB */}
              {row?.subData?.map((sub, i) => {
                return (
                  <TableWrapper
                    style={{
                      marginHorizontal: horizontalPadding,
                    }}
                    key={i}
                  >
                    <Row
                      data={[
                        Converter({ ...sub.title, i: 0 }),
                        ...(sub?.data?.map((each) =>
                          Converter({ ...each, i: 1 })
                        ) ?? []),
                      ]}
                    />
                  </TableWrapper>
                );
              })}
              {/* </TableWrapper> */}
            </>
          );
        })}
      </Table>
      {data?.footnotes?.map((note: CellItemProps, idx: number) => {
        return (
          <View
            style={{
              marginLeft: 50,
            }}
            key={idx}
          >
            {FooterConverter(note)}
          </View>
        );
      })}
    </View>
  );
};

export default ResearchTable;
