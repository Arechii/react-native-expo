import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting = ({ mainText, subText, mainTextStyles, subTextStyles }: GreetingProps) => {
  return (
    <StyledView>
      <RegularText textStyles={[{ color: colors.secondary, fontSize: 22 }, mainTextStyles]}>{mainText}</RegularText>
      <SmallText textStyles={[{ color: colors.graydark }, subTextStyles]}>{subText}</SmallText>
    </StyledView>
  );
};

export default Greeting;
