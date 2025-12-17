import { useState } from "react";
import { 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  VStack,
  HStack,
  Center,
  Text,
  Heading,
  Button,
  Input,
  IconButton,
  Divider,
} from "../components";

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
          <Box className="flex-1 px-6 bg-slate-900">
            {/* Logo */}
            <Center className="mt-12 mb-10">
              <Box className="w-20 h-20 bg-blue-500 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="rocket" size={40} color="white" />
              </Box>
              <Heading size="lg">Bem-vindo de volta</Heading>
              <Text className="text-slate-400 mt-2">
                Faça login para continuar
              </Text>
            </Center>

            {/* Form */}
            <VStack className="flex-1">
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

              <Box className="my-6">
                <Divider text="ou continue com" />
              </Box>

              {/* Social Buttons */}
              <HStack className="justify-center gap-4">
                <IconButton icon="logo-google" size="lg" variant="outline" />
                <IconButton icon="logo-apple" size="lg" variant="outline" />
                <IconButton icon="logo-facebook" size="lg" variant="outline" />
              </HStack>

              {/* Register Link */}
              <HStack className="justify-center mt-8 mb-6">
                <Text className="text-slate-400">Não tem uma conta? </Text>
                <TouchableOpacity>
                  <Text className="text-blue-400 font-semibold">Cadastre-se</Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
