import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void | undefined;
}

const Profile = ({ img, imgStyle, imgContainerStyle, onPress }: ProfileProps) => {
  return (
    <StyledView style={imgContainerStyle} onPress={onPress}>
      <StyledImage style={imgStyle} source={img} />
    </StyledView>
  );
};

export default Profile;
