/**
 * Gluestack UI Login - Expo Project
 * 
 * INSTALAÇÃO:
 * npx create-expo-app@latest gluestack-login --template blank-typescript
 * cd gluestack-login
 * npx gluestack-ui init
 * npm install @expo/vector-icons
 * 
 * Depois copie os arquivos deste projeto e rode: npx expo start
 */

import "./global.css";
import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <StatusBar style="light" />
      <LoginScreen />
    </GluestackUIProvider>
  );
}
