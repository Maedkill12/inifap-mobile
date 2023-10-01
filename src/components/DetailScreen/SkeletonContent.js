import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import * as Progress from "react-native-progress";

const SkeletonContent = () => {
  return (
    <>
      <View className="w-[48px] h-[48px] items-center justify-center mx-4" />
      <View className="z-10 flex-row px-4 mt-2 top-5" style={{ gap: 20 }}>
        <View className="h-[170px] w-[116px] mr-2" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white pt-14"
      >
        <View className="items-center">
          <Progress.Circle size={30} indeterminate={true} color="black" />
        </View>
        <View className="px-4">
          <Text className="min-h-[130px] max-h-[150px] mb-2 overflow-hidden" />
        </View>
      </ScrollView>
    </>
  );
};

export default SkeletonContent;
