import styled from "styled-components/native";
import { TransactionAviProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi = ({ background, icon }: TransactionAviProps) => {
  return (
    <StyledView style={{ backgroundColor: background }}>
      <Ionicons name={icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;
