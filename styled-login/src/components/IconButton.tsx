import styled, { css } from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  size?: Size;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.surface};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
  `,
  outline: css`
    background-color: transparent;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
  `,
};

const sizeMap = {
  sm: { container: 40, icon: 16 },
  md: { container: 48, icon: 20 },
  lg: { container: 56, icon: 24 },
};

const Container = styled.TouchableOpacity<{
  variant: Variant;
  size: Size;
  isDisabled: boolean;
}>`
  width: ${({ size }) => sizeMap[size].container}px;
  height: ${({ size }) => sizeMap[size].container}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
  justify-content: center;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  ${({ variant }) => variantStyles[variant]}
`;

export function IconButton({
  icon,
  onPress,
  size = "md",
  variant = "secondary",
  loading = false,
  disabled = false,
}: IconButtonProps) {
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
      ) : (
        <Ionicons name={icon} size={sizeMap[size].icon} color="white" />
      )}
    </Container>
  );
}
