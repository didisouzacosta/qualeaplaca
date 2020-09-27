import React from "react";

import { List, SectionTitle, Lesson, AllLessons } from "./styles";

import OptionsList from "../OptionsList";
import { LessonType } from "../../../../enums";

type Props = {
  lessons: LessonType[];
};

export default function LessonsList({ lessons }: Props) {
  const { items } = React.useMemo(() => {
    const base = [
      <OptionsList />,
      <SectionTitle>Simulados</SectionTitle>,
      <AllLessons lessons={lessons} />,
    ];

    const items = [
      ...base,
      ...lessons.map((lesson) => <Lesson type={lesson} />),
    ];

    return { items };
  }, []);

  return (
    <List
      showsVerticalScrollIndicator={false}
      data={items}
      keyExtractor={(_item, index) => `${index}`}
      renderItem={({ item }) => item}
    />
  );
}
