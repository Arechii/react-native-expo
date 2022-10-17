import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { CardProps } from "../components/Card/types";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import logo1 from "../assets/cards/mc.png";
import logo2 from "../assets/cards/visa_white.png";
import CardSection from "../components/Card/CardSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const cardsData: CardProps[] = [
  {
    id: 1,
    accountNr: "3845757744",
    balance: 20000.15,
    alias: "Work Debit",
    logo: logo1
  },
  {
    id: 2,
    accountNr: "3845757203",
    balance: 12000.01,
    alias: "Personal Prepaid",
    logo: logo2
  },
  {
    id: 3,
    accountNr: "3845757847",
    balance: 5600.83,
    alias: "School Prepaid",
    logo: logo1
  }
];

const Home = () => {
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
    </HomeContainer>
  );
};

export default Home;
