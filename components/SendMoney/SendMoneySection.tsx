import { SendMoneyProps, SendMoneySectionProps } from "./types";
import BottomSheet from "reanimated-bottom-sheet";
import { useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { FlatList, FlatListProps } from "react-native";
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

const SendMoneySection = ({ data }: SendMoneySectionProps) => {
  const sheetRef = useRef<BottomSheet>(null);
  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>Send money to</RegularText>
          <TextButton onPress={() => alert("Add")}>
            <SmallText textStyles={{ fontWeight: "bold", color: colors.tertiary }}>+Add</SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={data}
          contentContainerStyle={{ alignItems: "flex-start" }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };

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
