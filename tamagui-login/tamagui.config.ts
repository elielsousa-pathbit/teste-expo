import { config as configBase } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

const config = createTamagui({
  ...configBase,
  themes: {
    ...configBase.themes,
    dark: {
      ...configBase.themes.dark,
      background: "#0f172a",
      backgroundHover: "#1e293b",
      backgroundPress: "#334155",
      backgroundFocus: "#1e293b",
      color: "#ffffff",
      colorHover: "#f1f5f9",
      colorPress: "#e2e8f0",
      borderColor: "#334155",
      borderColorHover: "#475569",
      placeholderColor: "#64748b",
    },
  },
});

export default config;

export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
