import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
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
    <SafeAreaView className="flex-1 bg-slate-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          className="px-6"
        >
          {/* Logo */}
          <View className="items-center mt-12 mb-10">
            <View className="w-20 h-20 bg-blue-500 rounded-2xl items-center justify-center mb-4">
              <Ionicons name="rocket" size={40} color="white" />
            </View>
            <Text className="text-white text-2xl font-bold">
              Bem-vindo de volta
            </Text>
            <Text className="text-slate-400 mt-2">
              Faça login para continuar
            </Text>
          </View>

          {/* Form */}
          <View className="flex-1">
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

            <TouchableOpacity className="self-end mb-6">
              <Text className="text-blue-400 text-sm">Esqueceu a senha?</Text>
            </TouchableOpacity>

            <Button onPress={handleLogin} loading={loading} size="lg">
              Entrar
            </Button>

            <Divider text="ou continue com" className="my-6" />

            {/* Social Buttons */}
            <View className="flex-row justify-center gap-4">
              <IconButton
                icon="logo-google"
                size="lg"
                variant="secondary"
              />
              <IconButton
                icon="logo-apple"
                size="lg"
                variant="secondary"
              />
              <IconButton
                icon="logo-facebook"
                size="lg"
                variant="secondary"
              />
            </View>

            {/* Register Link */}
            <View className="flex-row justify-center mt-8 mb-6">
              <Text className="text-slate-400">Não tem uma conta? </Text>
              <TouchableOpacity>
                <Text className="text-blue-400 font-semibold">Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
