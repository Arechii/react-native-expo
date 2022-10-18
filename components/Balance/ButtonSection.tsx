import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import RegularButton from "../Button/RegularButton";
import { colors } from "../colors";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: "50%" }} onPress={() => {}}>
        Cancel <Ionicons name="card" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
