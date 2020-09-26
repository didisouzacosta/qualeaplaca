import React from "react";
import { Text, View } from "react-native";
import Card from "../Card";

import styles from "./styles";

export default function AllSimulatorsCard() {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title}>Todas as placas</Text>
        <View>
          <View style={styles.bullets}>
            <View style={styles.bullet}>
              <Text style={styles.bullet_label}>R</Text>
            </View>
            <View style={styles.bullet}>
              <Text style={styles.bullet_label}>A</Text>
            </View>
            <View style={styles.bullet}>
              <Text style={styles.bullet_label}>IC</Text>
            </View>
          </View>
          <View style={styles.bullets}>
            <View style={styles.bullet}>
              <Text style={styles.bullet_label}>I</Text>
            </View>
            <View style={styles.bullet}>
              <Text style={styles.bullet_label}>E</Text>
            </View>
            <View style={styles.bullet}>
              <Text style={styles.bullet_label}>SEA</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}
