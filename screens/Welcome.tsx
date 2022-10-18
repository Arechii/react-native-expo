import { StatusBar } from "expo-status-bar";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { StackNavigationOptions, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";
import { TextStyle } from "react-native";
import { useCallback } from "react";
import styled from "styled-components/native";
import background from "../assets/bgs/background_v1.png";
import BigText from "../components/Text/BigText";
import SmallText from "../components/Text/SmallText";
import RegularButton from "../components/Button/RegularButton";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

export const screenOptions: StackNavigationOptions = { headerShown: false };
const bigTextStyle: TextStyle = { width: "70%", marginBottom: 25 };
const smallTextStyle: TextStyle = { width: "70%", marginBottom: 25 };

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: Props) => {
  const onClick = useCallback(() => navigation.navigate("Home"), [navigation]);

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={bigTextStyle}>Best way to track your money</BigText>
          <SmallText textStyles={smallTextStyle}>
            Best payment method, connects your money to your friends and family.
          </SmallText>
          <RegularButton onPress={onClick}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
