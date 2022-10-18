import { FlatList, FlatListProps, TextStyle, ViewStyle } from "react-native";
import { colors } from "../colors";
import { TransactionProps, TransactionSectionProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled(FlatList as new (props: FlatListProps<TransactionProps>) => FlatList<TransactionProps>)`
  width: 100%;
`;

const rowStyle: ViewStyle = { marginBottom: 25 };
const titleTextStyle: TextStyle = { fontSize: 19, color: colors.secondary };
const valueTextStyle: TextStyle = { color: colors.secondary };
const listContainerStyle: ViewStyle = { paddingBottom: 25 };

const TransactionSection = ({ data }: TransactionSectionProps) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={rowStyle}>
        <RegularText textStyles={titleTextStyle}>Transactions</RegularText>
        <SmallText textStyles={valueTextStyle}>
          Recent <Ionicons name="caret-down" size={13} color={colors.graydark} />
        </SmallText>
      </TransactionRow>
      <TransactionList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={listContainerStyle}
        keyExtractor={({ id }: TransactionProps) => id.toString()}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
