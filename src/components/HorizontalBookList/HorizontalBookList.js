import { View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BookCover from "../BookCover";
import ListName from "./ListName";
import ExpandListButton from "./ExpandListButton";

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
          keyExtractor={(item) => item.canonical_isbn}
          renderItem={({ item }) => (
            <BookCover
              onPress={() => navigation.navigate("Detail", { book: item })}
              source={{
                uri: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg",
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HorizontalBookList;
