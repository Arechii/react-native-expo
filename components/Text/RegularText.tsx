import { colors } from "../colors";
import { TextProps } from "./types";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

const RegularText = ({ textStyles, children }: TextProps) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default RegularText;
