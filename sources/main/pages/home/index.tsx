import React, { useMemo } from "react";
import { useColorScheme } from "react-native-appearance";
import { LessonType } from "../../enums";

import LessonsList from "./components/LessonsList";
import { icons } from "./../../assets";
import { OptionListItem } from "./components/OptionsList";

export default function Home() {
  const theme = useColorScheme();
  const { options } = useMemo(() => {
    const options: OptionListItem[] = [
      { title: "Progresso", icon: icons.progress.getImage(theme) },
      { title: "Ajustes", icon: icons.adjusts.getImage(theme) },
      { title: "Sobre", icon: icons.about.getImage(theme) },
    ];
    return { options };
  }, [theme]);

  let lessons = [
    LessonType.Regulamentation,
    LessonType.Warning,
    LessonType.Identification,
    LessonType.Educational,
    LessonType.SpecialSignWarning,
    LessonType.MoreInformations,
  ];
  return <LessonsList lessons={lessons} options={options} />;
}
