import React from "react";

import { List, SectionTitle, Lesson, LessonType } from "./styles";

import OptionsList from "../OptionsList";
import AllSimulatorsCard from "../AllSimulatorsCard";

type ItemType = JSX.Element;

export default function LessonsList() {
  const { items } = React.useMemo(() => {
    const items: ItemType[] = [
      <OptionsList />,
      <SectionTitle>Simulados</SectionTitle>,
      <AllSimulatorsCard />,
      <Lesson
        initials="R"
        title="Regulamentação"
        type={LessonType.Regulamentation}
      />,
      <Lesson initials="A" title="Advertência" type={LessonType.Warning} />,
      <Lesson
        initials="I"
        title="Identificação"
        type={LessonType.Identification}
      />,
      <Lesson initials="E" title="Educativa" type={LessonType.Educational} />,
      <Lesson
        initials="SEA"
        title="Sinalização especial de advertência"
        type={LessonType.SpecialSignWarning}
      />,
      <Lesson
        initials="IC"
        title="Informações complementares"
        type={LessonType.MoreInformations}
      />,
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
