import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { AntDesign } from "@expo/vector-icons";
import SearchProvider from "./src/contexts/Search";
import ArticleProvider from "./src/contexts/Article";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
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
    <SearchProvider>
      <ArticleProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <TabNavigator />
        </NavigationContainer>
      </ArticleProvider>
    </SearchProvider>
  );
}
