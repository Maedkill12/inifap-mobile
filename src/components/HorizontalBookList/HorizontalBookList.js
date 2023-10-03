import { View, FlatList, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import BookCover from "../BookCover";
import ListName from "./ListName";
import ExpandListButton from "./ExpandListButton";
import { URL_BASE } from "../../util/constans";
import { SearchContext, actionTypes } from "../../contexts/Search";

const HorizontalBookList = ({ list, title, color }) => {
  const navigation = useNavigation();
  const { dispatch } = useContext(SearchContext);

  return (
    <View>
      <View className={`flex flex-row items-center justify-between mb-3 px-4`}>
        <ListName color={color} title={title} />
        <ExpandListButton
          onPress={() => {
            navigation.navigate("StackSearch");
          }}
          color={color}
        />
      </View>
      <View className="pl-4">
        <FlatList
          data={list}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id + item.categoria}
          renderItem={({ item }) => (
            <BookCover
              titleComponent={
                <Text className={`${color}`} numberOfLines={1}>
                  {item.publicacion}
                </Text>
              }
              onPress={() =>
                navigation.navigate("Detail", {
                  id: item.id,
                  category: item.categoria,
                })
              }
              source={{
                uri: `${URL_BASE}/public/publicaciones/${item.imagen}`,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HorizontalBookList;
