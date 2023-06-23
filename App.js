import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import ArticleProvider, {
  ArticleContext,
  actionTypes,
} from "./src/contexts/Article";
import useFetch from "./src/hooks/useFetch";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { dispatch } = useContext(ArticleContext);
  const { data, isLoading, error } = useFetch("http://192.168.1.67/articles", {
    method: "GET",
    // headers: {
    //   "X-RapidAPI-Key": "b6ac727c27msh9d5371b7a600d81p1499f5jsnad87346e86d7",
    //   "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
    // },
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch({ type: actionTypes.fetchAll, payload: data });
  }, [data]);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="StackHome"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="StackSearch"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="StackFavorite"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ArticleProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <TabNavigator />
      </NavigationContainer>
    </ArticleProvider>
  );
}
