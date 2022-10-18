import styled from "styled-components/native";
import { colors } from "../colors";
import Profile from "../Header/Profile";
import { ScreenWidth } from "../shared";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { SendMoneyProps } from "./types";

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem = ({ id, name, amount, background, img }: SendMoneyProps) => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{ backgroundColor: background }}
      onPress={() => alert("Send Money!")}
    >
      <>
        <Profile img={img} imgContainerStyle={{ marginBottom: 10 }} />
        <SmallText textStyles={{ textAlign: "left", color: colors.white, fontSize: 12 }}>{name}</SmallText>
        <RegularText textStyles={{ textAlign: "left", color: colors.white, fontSize: 13 }}>{amount}</RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
