import { ReactNode } from "react";
import { View } from "react-native";

interface GluestackUIProviderProps {
  children: ReactNode;
  mode?: "light" | "dark";
}

// Provider simplificado - no projeto real, use o gerado pelo CLI
export function GluestackUIProvider({ children, mode = "dark" }: GluestackUIProviderProps) {
  return (
    <View style={{ flex: 1, backgroundColor: mode === "dark" ? "#0f172a" : "#ffffff" }}>
      {children}
    </View>
  );
}
