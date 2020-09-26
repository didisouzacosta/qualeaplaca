import React from "react";

import { List, SectionTitle } from "./styles";

import OptionsList from "../OptionsList";
import AllSimulatorsCard from "../AllSimulatorsCard";
import LessonCard from "../LessonCard";

type ItemType = JSX.Element;

export default function ListItems() {
  const { items } = React.useMemo(() => {
    const items: ItemType[] = [
      <OptionsList />,
      <SectionTitle>Simulados</SectionTitle>,
      <AllSimulatorsCard />,
      <LessonCard initials="R" title="Regulamentação" />,
      <LessonCard initials="A" title="Advertência" />,
      <LessonCard initials="I" title="Identificação" />,
      <LessonCard initials="E" title="Educativa" />,
      <LessonCard initials="SEA" title="Sinalização especial de advertência" />,
      <LessonCard initials="IC" title="Informações complementares" />,
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
