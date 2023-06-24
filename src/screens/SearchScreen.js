import React, { useContext, useEffect, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import BookCard from "../components/BookCover";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchContext } from "../contexts/Search";
import useFetch from "../hooks/useFetch";

const Stack = createStackNavigator();

const Search = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const { search } = useContext(SearchContext);
  const [value, setValue] = useState("");
  const { data, error, isLoading } = useFetch(
    `http://192.168.1.67/articles?search=${search}`,
    {
      method: "GET",
    }
  );

  const onSearch = () => {};

  useEffect(() => {
    if (!data) {
      return;
    }
    setArticles(data);
  }, [data]);

  return (
    <GradientBackground>
      <Header
        title="Buscar"
        value={value}
        onChangeText={setValue}
        onSearch={onSearch}
      />
      <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        className="px-4"
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginBottom: 20,
        }}
        numColumns={2}
        renderItem={({ item }) => (
          <BookCard
            onPress={() => navigation.navigate("Detail", { id: item.id })}
            source={{
              uri: item.portada_url,
            }}
          />
        )}
      />
    </GradientBackground>
  );
};

const SearchScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Search} name="Search" />
      <Stack.Screen
        component={DetailScreen}
        name="Detail"
        options={{
          presentation: "modal",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchScreen;
