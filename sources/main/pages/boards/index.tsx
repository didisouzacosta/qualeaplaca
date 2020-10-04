import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { SafeAreaView } from "./../../components/SafeAreaView";
import { Text } from "./../../components/Text";
import { StackParams } from "./../../navigation";

type Props = StackScreenProps<StackParams, "Boards">;

const Boards = ({}: Props) => {
  return <Text>sdfsdfs</Text>;
};

export default Boards;
