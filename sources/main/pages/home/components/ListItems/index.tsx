import React from "react";

import { List, SectionTitle, LessonCard, LessonType } from "./styles";

import OptionsList from "../OptionsList";
import AllSimulatorsCard from "../AllSimulatorsCard";

type ItemType = JSX.Element;

export default function ListItems() {
  const { items } = React.useMemo(() => {
    const items: ItemType[] = [
      <OptionsList />,
      <SectionTitle>Simulados</SectionTitle>,
      <AllSimulatorsCard />,
      <LessonCard
        initials="R"
        title="Regulamentação"
        type={LessonType.Regulamentation}
      />,
      <LessonCard initials="A" title="Advertência" type={LessonType.Warning} />,
      <LessonCard
        initials="I"
        title="Identificação"
        type={LessonType.Identification}
      />,
      <LessonCard
        initials="E"
        title="Educativa"
        type={LessonType.Educational}
      />,
      <LessonCard
        initials="SEA"
        title="Sinalização especial de advertência"
        type={LessonType.SpecialSignWarning}
      />,
      <LessonCard
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
