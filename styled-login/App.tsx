/**
 * Styled Components Login - Expo Project
 * 
 * INSTALAÇÃO:
 * npx create-expo-app@latest styled-login --template blank-typescript
 * cd styled-login
 * npm install styled-components
 * npm install @types/styled-components-react-native --save-dev
 * npm install @expo/vector-icons
 * npm install react-native-safe-area-context
 * 
 * Depois copie os arquivos deste projeto e rode: npx expo start
 */

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { theme } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <LoginScreen />
    </ThemeProvider>
  );
}
