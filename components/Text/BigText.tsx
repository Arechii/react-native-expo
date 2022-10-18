import { colors } from "../colors";
import { TextProps } from "./types";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

const BigText = ({ textStyles, children }: TextProps) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default BigText;
