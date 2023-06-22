import { View, ScrollView } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSnapshot } from "valtio";
import state from "../state";
import BackButton from "../components/DetailScreen/BackButton";
import BookCover from "../components/BookCover";
import BookInfo from "../components/DetailScreen/BookInfo";
import BookDescription from "../components/DetailScreen/BookDescription";
import RecomendedBooks from "../components/DetailScreen/RecomendedBooks";

const DetailScreen = () => {
  const snap = useSnapshot(state);
  const navigation = useNavigation();
  const {
    params: { book },
  } = useRoute();
  return (
    <GradientBackground>
      <View className="px-4 z-10">
        <BackButton onPress={() => navigation.goBack()} />
        <View className="mt-2 flex-row top-5" style={{ gap: 20 }}>
          <BookCover
            onPress={null}
            source={{
              uri: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg",
            }}
          />
          <BookInfo title={book.title} author={book.authors[0]} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white flex-1 pt-14"
      >
        <BookDescription summary={book.summary} />
        <RecomendedBooks books={snap.books} />
      </ScrollView>
    </GradientBackground>
  );
};

export default DetailScreen;
