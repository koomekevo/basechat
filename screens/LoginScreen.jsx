import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

import { BGImage, Logo } from "../assets";

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: screenWidth }}
      />

      {/* Main View */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
      </View>
    </View>
  );
};

export default LoginScreen;
