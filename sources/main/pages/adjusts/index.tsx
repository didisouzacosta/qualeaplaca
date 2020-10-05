import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { StackParams } from "./../../navigation";
import { Text, SafeAreaView } from "../../components";

type Props = StackScreenProps<StackParams, "Adjusts">;

const Boards = ({ route }: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};

export default Boards;
