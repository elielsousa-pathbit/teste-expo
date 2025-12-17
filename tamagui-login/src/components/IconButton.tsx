import { Button, Spinner, styled, GetProps } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const StyledIconButton = styled(Button, {
  borderRadius: "$4",
  aspectRatio: 1,

  variants: {
    variant: {
      primary: {
        backgroundColor: "$blue10",
        pressStyle: { backgroundColor: "$blue11" },
      },
      secondary: {
        backgroundColor: "$gray3",
        borderWidth: 1,
        borderColor: "$gray6",
        pressStyle: { backgroundColor: "$gray4" },
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$gray6",
        pressStyle: { backgroundColor: "$gray4" },
      },
    },
    size: {
      sm: {
        width: 40,
        height: 40,
      },
      md: {
        width: 48,
        height: 48,
      },
      lg: {
        width: 56,
        height: 56,
      },
    },
  } as const,

  defaultVariants: {
    variant: "secondary",
    size: "md",
  },
});

type IconButtonProps = GetProps<typeof StyledIconButton> & {
  icon: keyof typeof Ionicons.glyphMap;
  loading?: boolean;
};

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

export function IconButton({
  icon,
  loading,
  disabled,
  size = "md",
  ...props
}: IconButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <StyledIconButton
      size={size}
      disabled={isDisabled}
      opacity={isDisabled ? 0.5 : 1}
      {...props}
    >
      {loading ? (
        <Spinner color="white" />
      ) : (
        <Ionicons name={icon} size={iconSizes[size]} color="white" />
      )}
    </StyledIconButton>
  );
}
