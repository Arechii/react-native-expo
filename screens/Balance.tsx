import { StackNavigationOptions, StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import { RootStackParamList } from "../navigators/RootStack";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import styled from "styled-components/native";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
  padding: 25px;
`;

export const screenOptions: (props: {
  route: RouteProp<RootStackParamList, "Balance">;
  navigation: any;
}) => StackNavigationOptions = ({ route }) => ({
  headerTitle: route?.params?.alias,
  headerTitleAlign: "center",
  headerBackImage: props => <Ionicons name="chevron-back" size={25} color={colors.secondary} {...props} />,
  headerLeftContainerStyle: {
    paddingLeft: 0
  }
});

type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance = ({ route }: Props) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

export default Balance;
