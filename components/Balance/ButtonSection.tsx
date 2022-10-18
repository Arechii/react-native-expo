import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";
import { ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import styled from "styled-components/native";
import RegularButton from "../Button/RegularButton";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const buttonStyle: ViewStyle = {
  width: "50%"
};

const ButtonSection = () => {
  const navigation = useNavigation();

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={buttonStyle} onPress={onCancel}>
        <Ionicons name="card" size={17} color={colors.white} /> Cancel
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
