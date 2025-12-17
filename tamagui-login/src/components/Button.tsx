import { Button as TButton, Spinner, Text, styled, GetProps } from "tamagui";
import { ReactNode } from "react";

const StyledButton = styled(TButton, {
  borderRadius: "$4",
  fontWeight: "600",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$blue10",
        pressStyle: { backgroundColor: "$blue11" },
      },
      secondary: {
        backgroundColor: "$gray8",
        pressStyle: { backgroundColor: "$gray9" },
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$gray8",
        pressStyle: { backgroundColor: "$gray4" },
      },
      ghost: {
        backgroundColor: "transparent",
        pressStyle: { backgroundColor: "$gray4" },
      },
    },
    size: {
      sm: {
        height: 40,
        paddingHorizontal: "$3",
      },
      md: {
        height: 48,
        paddingHorizontal: "$4",
      },
      lg: {
        height: 56,
        paddingHorizontal: "$5",
      },
    },
  } as const,

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = GetProps<typeof StyledButton> & {
  children: ReactNode;
  loading?: boolean;
};

export function Button({
  children,
  loading,
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      variant={variant}
      disabled={isDisabled}
      opacity={isDisabled ? 0.5 : 1}
      {...props}
    >
      {loading ? (
        <Spinner color="white" />
      ) : typeof children === "string" ? (
        <Text
          color={variant === "ghost" ? "$blue10" : "white"}
          fontWeight="600"
          fontSize="$4"
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledButton>
  );
}
