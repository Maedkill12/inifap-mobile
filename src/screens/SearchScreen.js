import React, { useContext, useEffect, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import BookCard from "../components/BookCover";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchContext } from "../contexts/Search";
import useXHLHttpRequest from "../hooks/useXMLHttpRequest";
import { URL_BASE } from "../util/constans";
import * as Progress from "react-native-progress";

const Stack = createStackNavigator();

const Search = () => {
  const navigation = useNavigation();
  const { search } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const { data, loading, error } = useXHLHttpRequest(
    `${URL_BASE}/api/articulo?page=${page}${search ? `&search=${search}` : ""}`,
    "GET",
    null
  );
  const onSearch = () => {};

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.status !== "success") {
      return;
    }
    setArticles(data.data);
  }, [data]);

  useEffect(() => {
    setValue(search);
  }, [search]);

  return (
    <GradientBackground>
      <Header
        title="Buscar"
        value={value}
        onChangeText={setValue}
        onSearch={onSearch}
      />
      {!loading ? (
        <>
          <FlatList
            ListFooterComponent={
              <View className="flex-row items-center justify-around">
                {page > 1 && (
                  <TouchableOpacity
                    onPress={() => {
                      setPage((prev) => Math.max(0, prev - 1));
                    }}
                  >
                    <Text className="py-4 text-lg font-bold text-white">
                      Anterior
                    </Text>
                  </TouchableOpacity>
                )}

                {articles.length >= 10 && (
                  <TouchableOpacity
                    onPress={() => {
                      setPage((prev) => prev + 1);
                    }}
                  >
                    <Text className="py-4 text-lg font-bold text-white">
                      Siguiente
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            }
            data={articles}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id + item.categoria}
            className="flex-1 px-4"
            columnWrapperStyle={{
              justifyContent: "space-around",
              marginBottom: 20,
            }}
            numColumns={2}
            renderItem={({ item }) => (
              <BookCard
                titleComponent={
                  <Text className={`text-white`} numberOfLines={1}>
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
        </>
      ) : (
        <View className="items-center justify-center flex-1">
          <Progress.Circle size={30} indeterminate={true} color="white" />
        </View>
      )}
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
