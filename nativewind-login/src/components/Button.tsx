import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const variantStyles = {
  primary: "bg-blue-500 active:bg-blue-600",
  secondary: "bg-slate-700 active:bg-slate-600",
  outline: "bg-transparent border border-slate-600 active:bg-slate-800",
  ghost: "bg-transparent active:bg-slate-800",
};

const sizeStyles = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-4 px-8",
};

const textVariantStyles = {
  primary: "text-white",
  secondary: "text-white",
  outline: "text-white",
  ghost: "text-blue-400",
};

const textSizeStyles = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Button({
  children,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      className={`
        rounded-xl items-center justify-center flex-row
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${isDisabled ? "opacity-50" : ""}
        ${className}
      `}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : typeof children === "string" ? (
        <Text
          className={`
            font-semibold text-center
            ${textVariantStyles[variant]}
            ${textSizeStyles[size]}
          `}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
