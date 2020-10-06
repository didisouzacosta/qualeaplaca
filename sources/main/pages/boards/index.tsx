import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { Text } from "./../../components/Text";
import { SafeAreaView } from "./../../components";
import { MainStackParams } from "./../../navigation";

type Props = StackScreenProps<MainStackParams, "Boards">;

const BoardsScreen = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};

export default BoardsScreen;
