import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./styles";

export interface Props {
  children?: React.ReactNode;
}

export default function Card(props: Props) {
  return (
    <TouchableOpacity style={styles.card}>{props.children}</TouchableOpacity>
  );
}
