import React from "react";

import { ScrollView, Card } from "./styles";

export default function OptionsList() {
  return (
    <ScrollView
      horizontal={true}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
    >
      <Card title="Plano Plus" />
      <Card title="Progesso" />
      <Card title="Ajustes" />
      <Card title="Sobre" />
    </ScrollView>
  );
}
