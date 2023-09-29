import { View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BookCover from "../BookCover";
import ListName from "./ListName";
import ExpandListButton from "./ExpandListButton";
import { URL_BASE } from "../../util/constans";

const HorizontalBookList = ({ list, title, color }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View className={`flex flex-row items-center justify-between mb-3 px-4`}>
        <ListName color={color} title={title} />
        <ExpandListButton
          onPress={() => navigation.navigate("StackSearch")}
          color={color}
        />
      </View>
      <View className="pl-4">
        <FlatList
          data={list}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BookCover
              onPress={() => navigation.navigate("Detail", { id: item.id })}
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
