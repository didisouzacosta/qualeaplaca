import React from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "./styles";
import ListItems from "./components/ListItems";

export default function Home() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <ListItems />
      </SafeAreaView>
    </>
  );
}
