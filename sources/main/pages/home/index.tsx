import React from "react";
import { LessonType } from "../../enums";

import LessonsList from "./components/LessonsList";

export default function Home() {
  let lessons = [
    LessonType.Regulamentation,
    LessonType.Warning,
    LessonType.Identification,
    LessonType.Educational,
    LessonType.SpecialSignWarning,
    LessonType.MoreInformations,
  ];
  return <LessonsList lessons={lessons} />;
}
