import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import HorizontalBookList from "../components/HorizontalBookList/HorizontalBookList";
import { ArticleContext, actionTypes } from "../contexts/Article";
import { useNavigation } from "@react-navigation/native";
import useXHLHttpRequest from "../hooks/useXMLHttpRequest";
import * as Progress from "react-native-progress";
import { URL_BASE } from "../util/constans";

const Stack = createStackNavigator();

const Home = () => {
  const { dispatch } = useContext(ArticleContext);
  const { data, loading, error } = useXHLHttpRequest(
    `${URL_BASE}/api/articulo/tecnico`,
    "GET",
    null
  );
  const [search, setSearch] = useState("");
  const { articles } = useContext(ArticleContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch({ type: actionTypes.fetchAll, payload: data });
  }, [data]);

  const onSearch = () => {
    if (!search) {
      return;
    }
    navigation.navigate("StackSearch", { search });
  };

  const recentArticles = articles.slice().sort((a, b) => {
    return new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion);
  });

  return (
    <GradientBackground>
      <Header
        title="Inicio"
        value={search}
        onChangeText={setSearch}
        onSearch={onSearch}
      />
      {!loading ? (
        <View style={{ gap: 40 }}>
          <HorizontalBookList
            title="Disponibles"
            list={articles}
            color="text-white"
          />
          <HorizontalBookList
            title="Recientes"
            list={recentArticles}
            color="text-white"
          />
        </View>
      ) : (
        <View className="justify-center items-center py-[50%]">
          <Progress.Circle size={30} indeterminate={true} color="white" />
        </View>
      )}
    </GradientBackground>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          presentation: "modal",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
