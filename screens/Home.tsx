import { StatusBar } from "expo-status-bar";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import { StackNavigationOptions, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";
import { CARDS, SEND_MONEY_DATA, TRANSACTIONS } from "../mock-data";
import styled from "styled-components/native";
import CardSection from "../components/Card/CardSection";
import TransactionSection from "../components/Transaction/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import Greeting from "../components/Header/Greeting";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

export const screenOptions: StackNavigationOptions = {
  headerTitle: props => <Greeting mainText="Hey Coby!" subText="Welcome back" {...props} />,
  headerLeft: () => <></>
};

export type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Home = () => {
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={CARDS} />
      <TransactionSection data={TRANSACTIONS} />
      <SendMoneySection data={SEND_MONEY_DATA} />
    </HomeContainer>
  );
};

export default Home;
