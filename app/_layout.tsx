import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

let AppEntryPoint = RootLayout;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;
