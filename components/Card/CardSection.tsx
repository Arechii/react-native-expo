import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import CardItem from "./CardItem";
import { CardProps, CardSectionProps } from "./types";

const CardList = styled(FlatList as new (props: FlatListProps<CardProps>) => FlatList<CardProps>)`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const CardSection = ({ data }: CardSectionProps) => {
  return (
    <CardList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 25, alignItems: "center" }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
