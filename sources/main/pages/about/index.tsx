import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { MainStackParams } from "./../../navigation";
import { Text, SafeAreaView } from "../../components";

type Props = StackScreenProps<MainStackParams, "About">;

const AboutScreen = ({ route }: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
