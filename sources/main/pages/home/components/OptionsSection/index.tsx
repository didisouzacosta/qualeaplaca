import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import styles from "./styles";

export default function OptionsSection() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        removeClippedSubviews={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.card}>
          <Text>Plano Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>Progesso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>Ajustes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>Sobre</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
