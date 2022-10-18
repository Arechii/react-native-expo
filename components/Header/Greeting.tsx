import { StyleProp, TextStyle } from "react-native";
import { colors } from "../colors";
import { useMemo } from "react";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";

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
  const mainTextStyle = useMemo<StyleProp<TextStyle>>(
    () => [{ color: colors.secondary, fontSize: 22 }, mainTextStyles],
    [mainTextStyles]
  );

  const subTextStyle = useMemo<StyleProp<TextStyle>>(
    () => [{ color: colors.graydark }, subTextStyles],
    [subTextStyles]
  );

  return (
    <StyledView>
      <RegularText textStyles={mainTextStyle}>{mainText}</RegularText>
      <SmallText textStyles={subTextStyle}>{subText}</SmallText>
    </StyledView>
  );
};

export default Greeting;
