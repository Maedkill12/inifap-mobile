import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../GradientBackground";
import BackButton from "./BackButton";
import BookCover from "../BookCover";
import BookInfo from "./BookInfo";
import BookDescription from "./BookDescription";
import RecomendedBooks from "./RecomendedBooks";

const BookPresentation = ({
  id,
  title,
  authores,
  summary,
  recomneded,
  tags,
  category,
  cover,
}) => {
  const navigation = useNavigation();
  return (
    <GradientBackground>
      <BackButton onPress={() => navigation.goBack()} />
      <View className="mt-2 flex-row top-5 px-4 z-10" style={{ gap: 20 }}>
        <BookCover
          onPress={null}
          source={{
            uri: cover,
          }}
        />
        <BookInfo
          title={title}
          authores={authores}
          id={id}
          category={category}
          cover={cover}
          summary={summary}
          tags={tags}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white flex-1 pt-14"
      >
        <BookDescription summary={summary} />
        <RecomendedBooks books={recomneded} />
      </ScrollView>
    </GradientBackground>
  );
};

export default BookPresentation;
