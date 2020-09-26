import React from "react";

import { ScrollView, Option } from "./styles";

export default function OptionsList() {
  return (
    <ScrollView
      horizontal={true}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
    >
      <Option title="Plano Plus" />
      <Option title="Progesso" />
      <Option title="Ajustes" />
      <Option title="Sobre" />
    </ScrollView>
  );
}
