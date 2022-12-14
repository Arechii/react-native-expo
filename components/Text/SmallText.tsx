import { colors } from "../colors";
import { TextProps } from "./types";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

const SmallText = ({ textStyles, children }: TextProps) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default SmallText;
