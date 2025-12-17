import { View, Text as RNText, ViewProps, TextProps } from "react-native";
import { ReactNode } from "react";

// Box - componente base
export function Box({ 
  children, 
  className = "", 
  ...props 
}: ViewProps & { children?: ReactNode; className?: string }) {
  return (
    <View className={className} {...props}>
      {children}
    </View>
  );
}

// VStack - vertical stack
export function VStack({ 
  children, 
  className = "",
  space,
  ...props 
}: ViewProps & { children?: ReactNode; className?: string; space?: string }) {
  const spaceClass = space ? `gap-${space}` : "";
  return (
    <View className={`flex-col ${spaceClass} ${className}`} {...props}>
      {children}
    </View>
  );
}

// HStack - horizontal stack
export function HStack({ 
  children, 
  className = "",
  space,
  ...props 
}: ViewProps & { children?: ReactNode; className?: string; space?: string }) {
  const spaceClass = space ? `gap-${space}` : "";
  return (
    <View className={`flex-row ${spaceClass} ${className}`} {...props}>
      {children}
    </View>
  );
}

// Center - centraliza conteúdo
export function Center({ 
  children, 
  className = "", 
  ...props 
}: ViewProps & { children?: ReactNode; className?: string }) {
  return (
    <View className={`items-center justify-center ${className}`} {...props}>
      {children}
    </View>
  );
}

// Text - texto estilizado
export function Text({ 
  children, 
  className = "", 
  ...props 
}: TextProps & { children?: ReactNode; className?: string }) {
  return (
    <RNText className={`text-white ${className}`} {...props}>
      {children}
    </RNText>
  );
}

// Heading - título
export function Heading({ 
  children, 
  className = "",
  size = "lg",
  ...props 
}: TextProps & { children?: ReactNode; className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };
  return (
    <RNText className={`text-white font-bold ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </RNText>
  );
}
