import styled, { css } from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.surface};
  `,
  outline: css`
    background-color: transparent;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
  `,
  ghost: css`
    background-color: transparent;
  `,
};

const sizeStyles = {
  sm: css`
    padding: 8px 16px;
  `,
  md: css`
    padding: 12px 24px;
  `,
  lg: css`
    padding: 16px 32px;
  `,
};

const Container = styled.TouchableOpacity<{
  variant: Variant;
  size: Size;
  isDisabled: boolean;
}>`
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  ${({ variant }) => variantStyles[variant]}
  ${({ size }) => sizeStyles[size]}
`;

const ButtonText = styled.Text<{ variant: Variant; size: Size }>`
  color: ${({ theme, variant }) =>
    variant === "ghost" ? theme.colors.primary : theme.colors.text};
  font-weight: 600;
  text-align: center;
  font-size: ${({ size, theme }) =>
    size === "sm"
      ? theme.fontSize.sm
      : size === "lg"
      ? theme.fontSize.lg
      : theme.fontSize.md}px;
`;

export function Button({
  children,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Container
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : typeof children === "string" ? (
        <ButtonText variant={variant} size={size}>
          {children}
        </ButtonText>
      ) : (
        children
      )}
    </Container>
  );
}
