import { TransactionAviProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";
import { ViewStyle } from "react-native";
import { useMemo } from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi = ({ background, icon }: TransactionAviProps) => {
  const style = useMemo<ViewStyle>(() => ({ backgroundColor: background }), [background]);

  return (
    <StyledView style={style}>
      <Ionicons name={icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;
