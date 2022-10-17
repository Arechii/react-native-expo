import Welcome from "./screens/Welcome";
import { useFonts } from "expo-font";
import RootStack from "./navigators/RootStack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const App = () => {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf")
  });

  useEffect(() => {
    if (!fontsLoaded) return;
    SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <RootStack />;
};

export default App;
