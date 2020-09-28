import React from "react";

import { ScrollView, Option } from "./styles";

export type OptionListItem = {
  title: string;
  image?: string;
};

type Props = {
  options: OptionListItem[];
};

export default function OptionsList({ options }: Props) {
  return (
    <ScrollView
      horizontal={true}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
    >
      {options.map((option) => (
        <Option title={option.title} />
      ))}
    </ScrollView>
  );
}
