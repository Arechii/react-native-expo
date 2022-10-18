import styled from "styled-components/native";
import { colors } from "../colors";
import { BalanceCardProps } from "./types";
import card_bg from "../../assets/bgs/background_transparent.png";
import RegularText from "../Text/RegularText";
import { View } from "react-native";
import SmallText from "../Text/SmallText";

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

const BalanceCard = ({ accountNr, logo, balance }: BalanceCardProps) => {
  return (
    <CardBackground source={card_bg}>
      <TouchableView>
        <CardRow>
          <RegularText>******{accountNr?.slice(6, 10)}</RegularText>
        </CardRow>
        <CardRow>
          <View style={{ flex: 3 }}>
            <SmallText textStyles={{ marginBottom: 5, color: colors.graylight }}>Total balance</SmallText>
            <RegularText textStyles={{ fontSize: 19 }}>${balance}</RegularText>
          </View>
          <Logo source={logo} />
        </CardRow>
      </TouchableView>
    </CardBackground>
  );
};

export default BalanceCard;
