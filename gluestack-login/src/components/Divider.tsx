import { View, Text } from "react-native";

interface DividerProps {
  text?: string;
  className?: string;
}

export function Divider({ text, className = "" }: DividerProps) {
  if (!text) {
    return <View className={`h-px bg-slate-700 ${className}`} />;
  }

  return (
    <View className={`flex-row items-center ${className}`}>
      <View className="flex-1 h-px bg-slate-700" />
      <Text className="text-slate-500 mx-4 text-sm">{text}</Text>
      <View className="flex-1 h-px bg-slate-700" />
    </View>
  );
}
