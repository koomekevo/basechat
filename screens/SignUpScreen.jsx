import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { BGImage, Logo } from "../assets";
import UserTextInput from "../components/UserTextInput";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
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
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Sign Up
        </Text>
        <View className="w-full flex items-center justify-center">
          {/* Full Name */}
          <UserTextInput
            placeholder="Full Name"
            isPass={false}
            setStateValue={setName}
          />

          {/* Email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
          />

          {/* Password */}
          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={setEmail}
          />

          {/* SignUp Button */}
          <TouchableOpacity className="w-full px-4 py-1 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="w-full py-12 flex-row item-center justify-center space-x-2">
            <Text className="text-base text-primaryText">
              Have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text className="text-base font-semibold text-primaryBold">
                Sign In Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
