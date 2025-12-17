import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input, IconButton, Divider } from "../components";

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.View`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.spacing.xxl}px;
`;

const LogoContainer = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xxxl}px;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl}px;
`;

const LogoBox = styled.View`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

const FormContainer = styled.View`
  flex: 1;
`;

const ForgotPassword = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  text-align: right;
  margin-bottom: ${({ theme }) => theme.spacing.xxl}px;
`;

const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

const RegisterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxl}px;
  margin-bottom: ${({ theme }) => theme.spacing.xxl}px;
`;

const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
`;

const RegisterLink = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const DividerContainer = styled.View`
  margin-vertical: ${({ theme }) => theme.spacing.xxl}px;
`;

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SafeContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            {/* Logo */}
            <LogoContainer>
              <LogoBox>
                <Ionicons name="rocket" size={40} color="white" />
              </LogoBox>
              <Title>Bem-vindo de volta</Title>
              <Subtitle>Faça login para continuar</Subtitle>
            </LogoContainer>

            {/* Form */}
            <FormContainer>
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

              <ForgotPassword>Esqueceu a senha?</ForgotPassword>

              <Button onPress={handleLogin} loading={loading} size="lg">
                Entrar
              </Button>

              <DividerContainer>
                <Divider text="ou continue com" />
              </DividerContainer>

              {/* Social Buttons */}
              <SocialContainer>
                <IconButton icon="logo-google" size="lg" variant="secondary" />
                <IconButton icon="logo-apple" size="lg" variant="secondary" />
                <IconButton icon="logo-facebook" size="lg" variant="secondary" />
              </SocialContainer>

              {/* Register Link */}
              <RegisterContainer>
                <RegisterText>Não tem uma conta? </RegisterText>
                <RegisterLink>Cadastre-se</RegisterLink>
              </RegisterContainer>
            </FormContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeContainer>
  );
}
