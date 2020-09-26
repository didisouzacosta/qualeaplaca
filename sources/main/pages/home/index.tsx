import React from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "./styles";
import LessonsList from "./components/LessonsList";

export default function Home() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <LessonsList />
      </SafeAreaView>
    </>
  );
}
