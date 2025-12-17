import { Input as TInput, XStack, YStack, Text, GetProps } from "tamagui";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type InputProps = GetProps<typeof TInput> & {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
};

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
    <YStack marginBottom="$4">
      {label && (
        <Text color="$gray11" marginBottom="$2" fontSize="$3" fontWeight="500">
          {label}
        </Text>
      )}
      <XStack
        alignItems="center"
        backgroundColor="$gray3"
        borderRadius="$4"
        borderWidth={1}
        borderColor={error ? "$red10" : "$gray6"}
        paddingHorizontal="$3"
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color="#64748b"
            style={{ marginRight: 12 }}
          />
        )}
        <TInput
          flex={1}
          backgroundColor="transparent"
          borderWidth={0}
          color="$color"
          paddingVertical="$3"
          fontSize="$4"
          placeholderTextColor="$placeholderColor"
          secureTextEntry={isPassword ? !isPasswordVisible : false}
          {...props}
        />
        {isPassword ? (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#64748b"
            />
          </TouchableOpacity>
        ) : rightIcon ? (
          <TouchableOpacity onPress={onRightIconPress}>
            <Ionicons name={rightIcon} size={20} color="#64748b" />
          </TouchableOpacity>
        ) : null}
      </XStack>
      {error && (
        <Text color="$red10" fontSize="$2" marginTop="$1">
          {error}
        </Text>
      )}
    </YStack>
  );
}
