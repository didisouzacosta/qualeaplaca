import React, { useMemo } from "react";

import { List, SectionTitle, Lesson, AllLessons, LessonProps } from "./styles";

import OptionsList, { OptionListItem } from "../OptionsList";

type Props = {
  lessons: LessonProps[];
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
        <Lesson
          type={lesson.type}
          progress={lesson.progress}
          onPress={lesson.onPress}
        />
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
