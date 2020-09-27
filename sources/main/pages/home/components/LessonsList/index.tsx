import React from "react";

import { List, SectionTitle, Lesson, AllLessons } from "./styles";

import OptionsList from "../OptionsList";
import { LessonType } from "../../../../enums";

type ItemType = JSX.Element;

export default function LessonsList() {
  const { items } = React.useMemo(() => {
    const items: ItemType[] = [
      <OptionsList />,
      <SectionTitle>Simulados</SectionTitle>,
      <AllLessons />,
      <Lesson type={LessonType.Regulamentation} />,
      <Lesson type={LessonType.Warning} />,
      <Lesson type={LessonType.Identification} />,
      <Lesson type={LessonType.Educational} />,
      <Lesson type={LessonType.SpecialSignWarning} />,
      <Lesson type={LessonType.MoreInformations} />,
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
