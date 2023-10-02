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
  const {
    data: technicalData,
    loading: loadingTechnical,
    error: errorTechnical,
  } = useXHLHttpRequest(`${URL_BASE}/api/articulo/tecnico`, "GET", null);

  const {
    data: scientificData,
    loading: loadingScientific,
    error: errorScientific,
  } = useXHLHttpRequest(`${URL_BASE}/api/articulo/cientifico`, "GET", null);

  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (!technicalData) {
      return;
    }
    if (technicalData.status !== "success") {
      return;
    }
  }, [technicalData]);

  useEffect(() => {
    if (!scientificData) {
      return;
    }
    if (scientificData.status !== "success") {
      return;
    }
  }, [scientificData]);

  const onSearch = () => {
    if (!search) {
      return;
    }
    navigation.navigate("StackSearch");
  };

  return (
    <GradientBackground>
      <Header
        title="Inicio"
        value={search}
        onChangeText={setSearch}
        onSearch={onSearch}
      />
      {!loadingTechnical && !loadingScientific ? (
        <View style={{ gap: 40 }}>
          <HorizontalBookList
            title="Técnico"
            list={technicalData.data}
            color="text-white"
            category={"tecnico"}
          />
          <HorizontalBookList
            title="Científico"
            list={scientificData.data}
            color="text-white"
            category={"cientifico"}
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
