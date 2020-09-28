import React from "react";

import { ScrollView, Option } from "./styles";

export type OptionListItem = {
  title: string;
  icon?: any;
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
      {options.map((option, index) => (
        <Option key={`${index}`} title={option.title} icon={option.icon} />
      ))}
    </ScrollView>
  );
}
