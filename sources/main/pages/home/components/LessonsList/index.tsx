import React, { useMemo } from "react";

import { List, SectionTitle, Lesson, AllLessons } from "./styles";

import OptionsList, { OptionListItem } from "../OptionsList";
import { LessonType } from "../../../../enums";

export type LessonInfo = {
  type: LessonType;
  progress: number;
};

type Props = {
  lessons: LessonInfo[];
  options: OptionListItem[];
};

export default function LessonsList({ lessons, options }: Props) {
  const { items } = useMemo(() => {
    const base = [
      <OptionsList options={options} />,
      <SectionTitle>Simulados</SectionTitle>,
      <AllLessons types={lessons.map((lesson) => lesson.type)} />,
    ];

    const items = [
      ...base,
      ...lessons.map((lesson) => (
        <Lesson type={lesson.type} progress={lesson.progress} />
      )),
    ];

    return { items };
  }, [lessons, options]);

  return (
    <List
      showsVerticalScrollIndicator={false}
      data={items}
      keyExtractor={(_item, index) => `${index}`}
      renderItem={({ item }) => item}
    />
  );
}
