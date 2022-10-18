import { TextStyle, View } from "react-native";
import { colors } from "../colors";
import { TransactionProps } from "./types";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import TransactionAvi from "./TransactionAvi";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const leftTitleStyle: TextStyle = { color: colors.secondary, textAlign: "left", marginBottom: 5 };
const leftValueStyle: TextStyle = { color: colors.graydark, textAlign: "left" };
const rightTitleStyle: TextStyle = { ...leftTitleStyle, textAlign: "right" };
const rightValueStyle: TextStyle = { ...leftValueStyle, textAlign: "right" };

const TransactionItem = ({ title, subtitle, amount, date, art }: TransactionProps) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi background={art.background} icon={art.icon} />
        <View style={{ marginLeft: 10 }}>
          <RegularText textStyles={leftTitleStyle}>{title}</RegularText>
          <SmallText textStyles={leftValueStyle}>{subtitle}</SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText textStyles={rightTitleStyle}>-${amount}</RegularText>
        <SmallText textStyles={rightValueStyle}>{date}</SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;
