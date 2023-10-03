import { View } from "react-native";
import React, { useEffect, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import HorizontalBookList from "../components/HorizontalBookList/HorizontalBookList";
import { useNavigation } from "@react-navigation/native";
import useXHLHttpRequest from "../hooks/useXMLHttpRequest";
import * as Progress from "react-native-progress";
import { URL_BASE } from "../util/constans";

const Stack = createStackNavigator();

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { data, loading, error } = useXHLHttpRequest(
    `${URL_BASE}/api/articulo`,
    "GET",
    null
  );

  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const onSearch = () => {
    if (!search) {
      return;
    }
    navigation.navigate("StackSearch");
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.status !== "success") {
      return;
    }
    setArticles(data.data);
  }, [data]);

  const recent = articles
    .slice()
    .sort((a, b) => b.ano.toString().trim() - a.ano.toString().trim());

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
            list={recent}
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
