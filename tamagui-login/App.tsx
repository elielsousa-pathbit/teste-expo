/**
 * Tamagui Login - Expo Project
 * 
 * INSTALAÇÃO:
 * npx create-expo-app@latest tamagui-login --template blank-typescript
 * cd tamagui-login
 * npm install tamagui @tamagui/config @tamagui/font-inter
 * npm install @expo/vector-icons
 * npm install react-native-reanimated
 * 
 * Depois copie os arquivos deste projeto e rode: npx expo start
 */

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <StatusBar style="light" />
      <LoginScreen />
    </TamaguiProvider>
  );
}
