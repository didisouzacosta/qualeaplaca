import React, { createContext, useContext } from "react";
import { QuestionTemplateType } from "../../../domain/models/Question";

type LessonContextProp = {
  lessons: QuestionTemplateType[];
};

type LessonProviderProp = {
  children: React.ReactNode;
};

const defaultValue: LessonContextProp = {
  lessons: [],
};

const LessonContext = createContext(defaultValue);

export default function LessonProvider({ children }: LessonProviderProp) {
  return (
    <LessonContext.Provider value={defaultValue}>
      {children}
    </LessonContext.Provider>
  );
}

export const useLesson = () => {
  const context = useContext(LessonContext);
  if (!context)
    throw new Error("useLesson must be used within a LessonProvider");
  const { lessons } = context;
  return { lessons };
};
