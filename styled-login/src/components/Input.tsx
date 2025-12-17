import styled from "styled-components/native";
import { TextInputProps, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
}

const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const InputContainer = styled.View<{ hasError?: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-width: 1px;
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.border};
  padding-horizontal: ${({ theme }) => theme.spacing.lg}px;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  padding-vertical: ${({ theme }) => theme.spacing.lg}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

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
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer hasError={!!error}>
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color="#64748b"
            style={{ marginRight: 12 }}
          />
        )}
        <StyledInput
          placeholderTextColor="#64748b"
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
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
