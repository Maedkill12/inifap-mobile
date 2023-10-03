import { View, Text, TextInput } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchContext, actionTypes } from "../contexts/Search";
import { Keyboard } from "react-native";

const Header = ({
  title,
  value,
  onChangeText,
  onSearch,
  globalSeach = true,
}) => {
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    if (globalSeach) {
      dispatch({
        type: actionTypes.SET_SEARCH,
        payload: value.toLowerCase().trim(),
      });
    }
    Keyboard.dismiss();
    onSearch();
  };

  return (
    <View className="px-4 py-2 ">
      <Text className="text-2xl font-semibold text-white">{title}</Text>
      <View className="mt-3 mb-4 px-2 bg-[#4C7C7C] rounded-xl flex flex-row items-center">
        <TextInput
          className="flex-1 py-4 text-sm text-white border-none"
          placeholder="Buscar por autor, título, etc..."
          placeholderTextColor={"white"}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
