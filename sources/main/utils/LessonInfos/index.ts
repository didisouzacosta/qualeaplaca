import { DefaultTheme } from "styled-components";
import { LessonType } from "../../enums";

type LessonDescription = {
  initials: string;
  name: string;
};

export const lessonDescriptionByType = (
  type: LessonType
): LessonDescription => {
  switch (type) {
    case LessonType.Regulamentation:
      return { initials: "R", name: "Regulamentação" };
    case LessonType.Warning:
      return { initials: "A", name: "Advertência" };
    case LessonType.Identification:
      return { initials: "I", name: "Identificação" };
    case LessonType.Educational:
      return { initials: "E", name: "Educativa" };
    case LessonType.SpecialSignWarning:
      return { initials: "SEA", name: "Sinalização especial de advertência" };
    case LessonType.MoreInformations:
      return { initials: "IC", name: "Informações complementares" };
    case LessonType.All:
      return { initials: "*", name: "Todas as placas" };
  }
};

export const lessonColorByType = (
  type: LessonType,
  theme: DefaultTheme
): string => {
  switch (type) {
    case LessonType.Regulamentation:
      return theme.colors.lessons.regulamentation;
    case LessonType.Warning:
      return theme.colors.lessons.warning;
    case LessonType.Identification:
      return theme.colors.lessons.identification;
    case LessonType.Educational:
      return theme.colors.lessons.educational;
    case LessonType.SpecialSignWarning:
      return theme.colors.lessons.specialSignOfWarning;
    case LessonType.MoreInformations:
      return theme.colors.lessons.moreInformations;
    default:
      return theme.colors.cardColor;
  }
};
