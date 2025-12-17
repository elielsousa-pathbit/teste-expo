import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { container: "p-2", icon: 16 },
  md: { container: "p-3", icon: 20 },
  lg: { container: "p-4", icon: 24 },
};

const variantStyles = {
  primary: "bg-blue-500 active:bg-blue-600",
  secondary: "bg-slate-800 border border-slate-700 active:bg-slate-700",
  outline: "bg-transparent border border-slate-600 active:bg-slate-800",
};

export function IconButton({
  icon,
  onPress,
  size = "md",
  variant = "secondary",
  loading = false,
  disabled = false,
  className = "",
}: IconButtonProps) {
  const isDisabled = disabled || loading;
  const { container, icon: iconSize } = sizeMap[size];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      className={`
        rounded-xl items-center justify-center
        ${variantStyles[variant]}
        ${container}
        ${isDisabled ? "opacity-50" : ""}
        ${className}
      `}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Ionicons name={icon} size={iconSize} color="white" />
      )}
    </TouchableOpacity>
  );
}
