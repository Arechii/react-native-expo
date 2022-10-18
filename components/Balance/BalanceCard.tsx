import styled from "styled-components/native";
import SmallText from "../Text/SmallText";
import card_bg from "../../assets/bgs/background_transparent.png";
import RegularText from "../Text/RegularText";
import { colors } from "../colors";
import { BalanceCardProps } from "./types";
import { TextStyle, View, ViewStyle } from "react-native";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const viewStyle: ViewStyle = {
  flex: 3
};

const balanceTitleStyle: TextStyle = {
  marginBottom: 5,
  color: colors.graylight
};

const balanceStyle: TextStyle = {
  fontSize: 19
};

const BalanceCard = ({ accountNr, logo, balance }: BalanceCardProps) => {
  return (
    <CardBackground source={card_bg}>
      <TouchableView>
        <CardRow>
          <RegularText>******{accountNr?.slice(6, 10)}</RegularText>
        </CardRow>
        <CardRow>
          <View style={viewStyle}>
            <SmallText textStyles={balanceTitleStyle}>Total balance</SmallText>
            <RegularText textStyles={balanceStyle}>${balance}</RegularText>
          </View>
          <Logo source={logo} />
        </CardRow>
      </TouchableView>
    </CardBackground>
  );
};

export default BalanceCard;
