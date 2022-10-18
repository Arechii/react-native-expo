import { colors } from "../colors";
import { AmountProps } from "./types";
import { TextStyle } from "react-native";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";

const AmountSectionBackground = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 5px;
  align-items: center;
`;

const balanceTitleStyle: TextStyle = {
  color: colors.secondary,
  marginBottom: 15
};

const balanceStyle: TextStyle = {
  color: colors.secondary,
  fontSize: 28
};

const AmountSection = ({ balance }: AmountProps) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={balanceTitleStyle}>Total Balance</SmallText>
      <RegularText textStyles={balanceStyle}>$ {balance}</RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
