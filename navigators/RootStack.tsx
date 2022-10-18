import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { colors } from "../components/colors";
import { CardProps } from "../components/Card/types";
import Welcome, { screenOptions as welcomeScreenOptions } from "../screens/Welcome";
import Home, { screenOptions as homeScreenOptions } from "../screens/Home";
import Balance, { screenOptions as balanceScreenOptions } from "../screens/Balance";
import Profile from "../components/Header/Profile";
import Avi from "../assets/avi/avatar.png";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const navigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.graylight,
    borderBottomWidth: 0,
    shadowColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
    height: 120
  },
  headerTintColor: colors.secondary,
  headerRightContainerStyle: {
    paddingRight: 25
  },
  headerLeftContainerStyle: {
    paddingLeft: 10
  },
  headerRight: () => <Profile img={Avi} imgContainerStyle={{ backgroundColor: colors.tertiary }} />
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={welcomeScreenOptions} />
        <Stack.Screen name="Home" component={Home} options={homeScreenOptions} />
        <Stack.Screen name="Balance" component={Balance} options={balanceScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
