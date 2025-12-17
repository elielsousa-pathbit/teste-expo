import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Variant = "solid" | "outline";
type Size = "sm" | "md" | "lg";

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  size?: Size;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const variants = {
  solid: "bg-blue-500 active:bg-blue-600",
  outline: "bg-slate-800 border border-slate-700 active:bg-slate-700",
};

const sizeMap = {
  sm: { container: "p-2", icon: 16 },
  md: { container: "p-3", icon: 20 },
  lg: { container: "p-4", icon: 24 },
};

export function IconButton({
  icon,
  onPress,
  size = "md",
  variant = "outline",
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
        ${variants[variant]}
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
