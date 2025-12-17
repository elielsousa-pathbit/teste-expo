import { XStack, Separator, Text, GetProps } from "tamagui";

type DividerProps = GetProps<typeof XStack> & {
  text?: string;
};

export function Divider({ text, ...props }: DividerProps) {
  if (!text) {
    return <Separator borderColor="$gray6" {...props} />;
  }

  return (
    <XStack alignItems="center" {...props}>
      <Separator flex={1} borderColor="$gray6" />
      <Text color="$gray9" marginHorizontal="$4" fontSize="$3">
        {text}
      </Text>
      <Separator flex={1} borderColor="$gray6" />
    </XStack>
  );
}
