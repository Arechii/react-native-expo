import { SendMoneyProps, SendMoneySectionProps } from "./types";
import { useCallback, useRef } from "react";
import { colors } from "../colors";
import { FlatList, FlatListProps, TextStyle, ViewStyle } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import SendMoneyItem from "./SendMoneyItem";

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled(FlatList as new (props: FlatListProps<SendMoneyProps>) => FlatList<SendMoneyProps>)`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const rowStyle: ViewStyle = { marginBottom: 25 };
const titleTextStyle: TextStyle = { fontSize: 19, color: colors.secondary };
const buttonTextStyle: TextStyle = { fontWeight: "bold", color: colors.tertiary };
const containerStyle: ViewStyle = { alignItems: "flex-start" };

const SendMoneySection = ({ data }: SendMoneySectionProps) => {
  const sheetRef = useRef<BottomSheet>(null);
  const onClick = useCallback(() => alert("Add"), []);

  const renderContent = useCallback(() => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={rowStyle}>
          <RegularText textStyles={titleTextStyle}>Send money to</RegularText>
          <TextButton onPress={onClick}>
            <SmallText textStyles={buttonTextStyle}>+Add</SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={data}
          contentContainerStyle={containerStyle}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: SendMoneyProps) => id.toString()}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  }, [data]);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={["7%", "30%"]}
      borderRadius={25}
      initialSnap={0}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;
