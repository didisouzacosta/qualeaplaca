import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { Text } from "./../../components/Text";
import { SafeAreaView } from "./../../components";
import { StackParams } from "./../../navigation";

type Props = StackScreenProps<StackParams, "Progress">;

const Progress = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};

export default Progress;
