import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BookCard = ({ book }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="h-[170px] w-[116px] mr-2"
      onPress={() => navigation.navigate("Detail", { book })}
    >
      <Image
        source={{ uri: book.portada }}
        className="w-full h-full overflow-hidden rounded-xl"
      />
    </TouchableOpacity>
  );
};

export default BookCard;
