import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux"; // Import useSelector
import { RootState } from "../store"; // Adjust the path
import { Stack } from "expo-router";

export default function Activity() {
  // Retrieve the name from the store
  const userData = useSelector((state: RootState) => state.userData);
  return (
    <SafeAreaView className="justify-center items-center bg-[#32b6cd] h-full">
       <Stack.Screen
        options={{
          headerTitle: "Rider History",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <Text className="text-white uppercase" >hello! Your Welcome</Text>

    </SafeAreaView>
  );
}
