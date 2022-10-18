import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import { SendMoneyProps } from "./types";
import { useCallback, useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";
import Profile from "../Header/Profile";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const nameStyle: TextStyle = {
  textAlign: "left",
  color: colors.white,
  fontSize: 12
};

const amountStyle: TextStyle = { ...nameStyle, fontSize: 13 };
const imgContainerStyle: ViewStyle = { marginBottom: 10 };

const SendMoneyItem = ({ name, amount, background, img }: SendMoneyProps) => {
  const containerStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor: background
    }),
    [background]
  );
  const onPress = useCallback(() => alert("Sent Money!"), []);

  return (
    <SendMoneyItemContainer underlayColor={colors.secondary} style={containerStyle} onPress={onPress}>
      <>
        <Profile img={img} imgContainerStyle={imgContainerStyle} />
        <SmallText textStyles={nameStyle}>{name}</SmallText>
        <RegularText textStyles={amountStyle}>{amount}</RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
