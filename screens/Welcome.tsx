import { StatusBar } from "expo-status-bar";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
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

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>Best way to track your money</BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method, connects your money to your friends and family.
          </SmallText>
          <RegularButton onPress={() => {}}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
