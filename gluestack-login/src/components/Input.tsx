import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { useState, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
}

// Input principal
export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = secureTextEntry !== undefined;

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-slate-300 mb-2 text-sm font-medium">{label}</Text>
      )}
      <View
        className={`
          flex-row items-center
          bg-slate-800 rounded-xl
          border ${error ? "border-red-500" : "border-slate-700"}
          px-4
        `}
      >
        {leftIcon && (
          <Ionicons name={leftIcon} size={20} color="#64748b" style={{ marginRight: 12 }} />
        )}
        <TextInput
          className="flex-1 text-white py-4 text-base"
          placeholderTextColor="#64748b"
          secureTextEntry={isPassword ? !isPasswordVisible : false}
          {...props}
        />
        {isPassword ? (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={20} color="#64748b" />
          </TouchableOpacity>
        ) : rightIcon ? (
          <TouchableOpacity onPress={onRightIconPress}>
            <Ionicons name={rightIcon} size={20} color="#64748b" />
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
}

// FormControl para composição estilo Gluestack
export function FormControl({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <View className={`mb-4 ${className}`}>{children}</View>;
}

export function FormControlLabel({ children }: { children: ReactNode }) {
  return <View className="mb-2">{children}</View>;
}

export function FormControlLabelText({ children }: { children: string }) {
  return <Text className="text-slate-300 text-sm font-medium">{children}</Text>;
}

export function FormControlError({ children }: { children: ReactNode }) {
  return <View className="mt-1">{children}</View>;
}

export function FormControlErrorText({ children }: { children: string }) {
  return <Text className="text-red-500 text-sm">{children}</Text>;
}
