/**
 * NativeWind Login - Expo Project
 * 
 * INSTALAÇÃO:
 * npx create-expo-app@latest nativewind-login --template blank-typescript
 * cd nativewind-login
 * npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
 * npm install @expo/vector-icons
 * npx tailwindcss init
 * 
 * Depois copie os arquivos deste projeto e rode: npx expo start
 */

import "./global.css";
import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LoginScreen />
    </>
  );
}
