export const theme = {
  colors: {
    background: "#0f172a",
    surface: "#1e293b",
    surfaceHover: "#334155",
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    text: "#ffffff",
    textMuted: "#94a3b8",
    textSecondary: "#cbd5e1",
    border: "#334155",
    borderHover: "#475569",
    placeholder: "#64748b",
    error: "#ef4444",
    success: "#22c55e",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
};

export type Theme = typeof theme;
