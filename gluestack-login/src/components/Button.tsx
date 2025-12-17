import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const variants = {
  solid: {
    container: "bg-blue-500 active:bg-blue-600",
    text: "text-white",
  },
  outline: {
    container: "bg-transparent border border-slate-600 active:bg-slate-800",
    text: "text-white",
  },
  ghost: {
    container: "bg-transparent active:bg-slate-800",
    text: "text-blue-400",
  },
};

const sizes = {
  sm: { container: "py-2 px-4", text: "text-sm" },
  md: { container: "py-3 px-6", text: "text-base" },
  lg: { container: "py-4 px-8", text: "text-lg" },
};

export function Button({
  children,
  onPress,
  variant = "solid",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const variantStyle = variants[variant];
  const sizeStyle = sizes[size];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      className={`
        rounded-xl items-center justify-center flex-row
        ${variantStyle.container}
        ${sizeStyle.container}
        ${isDisabled ? "opacity-50" : ""}
        ${className}
      `}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : typeof children === "string" ? (
        <Text className={`font-semibold text-center ${variantStyle.text} ${sizeStyle.text}`}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

// ButtonText para composição
export function ButtonText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <Text className={`font-semibold text-center text-white ${className}`}>{children}</Text>;
}

// ButtonSpinner para composição
export function ButtonSpinner() {
  return <ActivityIndicator color="white" size="small" />;
}
