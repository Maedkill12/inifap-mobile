import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../GradientBackground";
import BackButton from "./BackButton";
import BookCover from "../BookCover";
import BookInfo from "./BookInfo";
import BookDescription from "./BookDescription";
import RecomendedBooks from "./RecomendedBooks";
import SkeletonContent from "./SkeletonContent";

const BookPresentation = ({
  id,
  title,
  year,
  summary,
  recomneded,
  category,
  cover,
  loading,
  pdfName,
}) => {
  const navigation = useNavigation();
  return (
    <GradientBackground>
      {!loading && <BackButton onPress={() => navigation.goBack()} />}
      {loading ? (
        <SkeletonContent />
      ) : (
        <View className="z-10 flex-row px-4 mt-2 top-5" style={{ gap: 20 }}>
          <BookCover
            onPress={null}
            source={{
              uri: cover,
            }}
          />
          <BookInfo
            title={title}
            year={year}
            id={id}
            category={category}
            cover={cover}
            summary={summary}
            pdfName={pdfName}
          />
        </View>
      )}
      {!loading && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 bg-white pt-14"
        >
          <BookDescription summary={summary} />
          <RecomendedBooks books={recomneded} />
        </ScrollView>
      )}
    </GradientBackground>
  );
};

export default BookPresentation;
