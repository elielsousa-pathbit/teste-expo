import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { YStack, XStack, Text, ScrollView, Stack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input, IconButton, Divider } from "../components";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <YStack flex={1} paddingHorizontal="$5" backgroundColor="$background">
            {/* Logo */}
            <YStack alignItems="center" marginTop="$8" marginBottom="$8">
              <Stack
                width={80}
                height={80}
                backgroundColor="$blue10"
                borderRadius="$6"
                alignItems="center"
                justifyContent="center"
                marginBottom="$4"
              >
                <Ionicons name="rocket" size={40} color="white" />
              </Stack>
              <Text color="$color" fontSize="$8" fontWeight="bold">
                Bem-vindo de volta
              </Text>
              <Text color="$gray10" marginTop="$2">
                Faça login para continuar
              </Text>
            </YStack>

            {/* Form */}
            <YStack flex={1}>
              <Input
                label="E-mail"
                placeholder="seu@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                leftIcon="mail"
              />

              <Input
                label="Senha"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                leftIcon="lock-closed"
              />

              <XStack justifyContent="flex-end" marginBottom="$5">
                <Text color="$blue10" fontSize="$3">
                  Esqueceu a senha?
                </Text>
              </XStack>

              <Button onPress={handleLogin} loading={loading} size="lg">
                Entrar
              </Button>

              <Divider text="ou continue com" marginVertical="$5" />

              {/* Social Buttons */}
              <XStack justifyContent="center" gap="$3">
                <IconButton icon="logo-google" size="lg" variant="secondary" />
                <IconButton icon="logo-apple" size="lg" variant="secondary" />
                <IconButton icon="logo-facebook" size="lg" variant="secondary" />
              </XStack>

              {/* Register Link */}
              <XStack justifyContent="center" marginTop="$6" marginBottom="$5">
                <Text color="$gray10">Não tem uma conta? </Text>
                <Text color="$blue10" fontWeight="600">
                  Cadastre-se
                </Text>
              </XStack>
            </YStack>
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
