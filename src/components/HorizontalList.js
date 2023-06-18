import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BookCard from "./BookCard";

const HorizontalList = ({ name, list, styles = "", nameStyles = "" }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        className={`px-4 flex flex-row items-center justify-between mb-3 ${styles}`}
      >
        <Text className={`font-medium text-white text-base ${nameStyles}`}>
          {name}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text className="font-light italic text-white text-sm">Ver todo</Text>
        </TouchableOpacity>
      </View>
      <View className={`pl-4 ${styles}`}>
        <FlatList
          data={list}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.canonical_isbn}
          renderItem={({ item }) => <BookCard book={item} />}
        />
      </View>
    </View>
  );
};

export default HorizontalList;
