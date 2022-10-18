import { FlatList, FlatListProps, ViewStyle } from "react-native";
import { CardProps, CardSectionProps } from "./types";
import styled from "styled-components/native";
import CardItem from "./CardItem";

const CardList = styled(FlatList as new (props: FlatListProps<CardProps>) => FlatList<CardProps>)`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const containerStyle: ViewStyle = {
  paddingRight: 25,
  alignItems: "center"
};

const CardSection = ({ data }: CardSectionProps) => {
  return (
    <CardList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={containerStyle}
      keyExtractor={({ id }: CardProps) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
