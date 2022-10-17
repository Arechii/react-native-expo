import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import TransactionAvi from "./TransactionAvi";
import { TransactionProps } from "./types";

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

const TransactionItem = ({ title, subtitle, amount, date, art }: TransactionProps) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi background={art.background} icon={art.icon} />
        <View style={{ marginLeft: 10 }}>
          <RegularText textStyles={{ color: colors.secondary, textAlign: "left", marginBottom: 5 }}>
            {title}
          </RegularText>
          <SmallText textStyles={{ color: colors.graydark, textAlign: "left" }}>{subtitle}</SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText textStyles={{ color: colors.secondary, textAlign: "right", marginBottom: 5 }}>
          {amount}
        </RegularText>
        <SmallText textStyles={{ color: colors.graydark, textAlign: "right" }}>{date}</SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;
