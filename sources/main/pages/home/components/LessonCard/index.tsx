import React from "react";
import { Text } from "react-native";
import Card from "../Card";

import styles from "./styles";

type Props = {
  title: string;
  initials: string;
};

export default function LessonCard(props: Props) {
  return (
    <Card>
      <Text style={styles.initial}>{props.initials}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </Card>
  );
}
