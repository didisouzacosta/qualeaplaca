import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import styles from "./styles";
import OptionsSection from "./components/OptionsSection";
import SectionHeader from "./components/SectionHeader";
import Card from "./components/Card";
import AllSimulatorsCard from "./components/AllSimulatorsCard";
import LessonCard from "./components/LessonCard";

interface Item {
  render: () => JSX.Element;
}

export default function Home() {
  const { sections } = React.useMemo(() => {
    const sections: Item[] = [
      {
        render: () => <OptionsSection />,
      },
      {
        render: () => <SectionHeader title="Simulados" />,
      },
      {
        render: () => <AllSimulatorsCard />,
      },
      {
        render: () => <LessonCard initials="R" title="Regulamentação" />,
      },
      {
        render: () => <LessonCard initials="A" title="Advertência" />,
      },
      {
        render: () => <LessonCard initials="I" title="Identificação" />,
      },
      {
        render: () => <LessonCard initials="E" title="Educativa" />,
      },
      {
        render: () => (
          <LessonCard
            initials="SEA"
            title="Sinalização especial de advertência"
          />
        ),
      },
      {
        render: () => (
          <LessonCard initials="IC" title="Informações complementares" />
        ),
      },
    ];

    return { sections };
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe}>
        <FlatList<Item>
          style={{ overflow: "visible" }}
          contentContainerStyle={styles.list_container}
          showsVerticalScrollIndicator={false}
          data={sections}
          keyExtractor={(_item, index) => `${index}`}
          renderItem={({ item }) => item.render()}
        />
      </SafeAreaView>
    </>
  );
}
