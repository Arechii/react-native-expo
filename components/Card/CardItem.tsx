import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import { CardProps } from "./types";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/Home";
import { TextStyle, View, ViewStyle } from "react-native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import styled from "styled-components/native";
import card_bg from "../../assets/bgs/background_transparent.png";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
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

const CardItem = ({ id, accountNr, logo, balance }: CardProps) => {
  const navigation = useNavigation<HomeProps["navigation"]>();

  const handlePress = useCallback(() => {
    navigation.navigate("Balance", { id, accountNr, logo, balance });
  }, [navigation]);

  return (
    <CardBackground source={card_bg}>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText>******{accountNr.slice(6, 10)}</RegularText>
          </CardRow>
          <CardRow>
            <View style={viewStyle}>
              <SmallText textStyles={balanceTitleStyle}>Total balance</SmallText>
              <RegularText textStyles={balanceStyle}>${balance}</RegularText>
            </View>
            <Logo source={logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
