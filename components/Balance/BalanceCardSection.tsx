import styled from "styled-components/native";
import BalanceCard from "./BalanceCard";
import { BalanceCardProps } from "./types";

const BalanceCardSectionBackground = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
`;

const BalanceCardSection = (props: BalanceCardProps) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;
