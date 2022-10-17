import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { TransactionProps, TransactionSectionProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
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

const TransactionSection = ({ data }: TransactionSectionProps) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>Transaction</RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent <Ionicons name="caret-down" size={13} color={colors.graydark} />
        </SmallText>
      </TransactionRow>
      <TransactionList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
