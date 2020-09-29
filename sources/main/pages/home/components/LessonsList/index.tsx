import React, { useMemo } from "react";

import { List, SectionTitle, Lesson, AllLessons } from "./styles";

import OptionsList, { OptionListItem } from "../OptionsList";
import { LessonType } from "../../../../enums";

type Props = {
  lessons: LessonType[];
  options: OptionListItem[];
};

export default function LessonsList({ lessons, options }: Props) {
  const base = [
    <OptionsList options={options} />,
    <SectionTitle>Simulados</SectionTitle>,
    <AllLessons lessons={lessons} />,
  ];

  const items = [...base, ...lessons.map((lesson) => <Lesson type={lesson} />)];

  return (
    <List
      showsVerticalScrollIndicator={false}
      data={items}
      keyExtractor={(_item, index) => `${index}`}
      renderItem={({ item }) => item}
    />
  );
}
