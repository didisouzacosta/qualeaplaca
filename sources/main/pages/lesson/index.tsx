import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { SafeAreaView, Text } from "./../../components";
import { StackParams } from "./../../navigation";

type Props = StackScreenProps<StackParams, "Lesson">;

const LessonScreen = ({ route }: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};

export default LessonScreen;
