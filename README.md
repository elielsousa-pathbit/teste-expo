# 🚀 Expo Login Projects - CSS Frameworks Comparison

Este repositório contém 4 projetos de tela de login implementados com diferentes frameworks CSS para React Native/Expo:

1. **NativeWind** - Tailwind CSS para React Native
2. **Tamagui** - UI Kit universal com temas
3. **Styled Components** - CSS-in-JS tradicional
4. **Gluestack UI** - Baseado em NativeWind com componentes

## 📋 Estrutura Comum

Todos os projetos seguem a mesma estrutura:

```
projeto/
├── App.tsx                    # Entry point
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── IconButton.tsx
│   │   ├── Divider.tsx
│   │   └── index.ts
│   └── screens/
│       └── LoginScreen.tsx   # Tela de login
├── package.json
└── [config files]
```

## 🛠️ Como Rodar Cada Projeto

### Pré-requisitos
- Node.js 18+
- Expo Go app no celular (para testar no dispositivo)
- Ou emulador iOS/Android

---

## 1️⃣ NativeWind (Tailwind CSS)

```bash
# Criar projeto
npx create-expo-app@latest nativewind-login --template blank-typescript
cd nativewind-login

# Instalar dependências
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context @expo/vector-icons

# Criar tailwind.config.js
npx tailwindcss init

# Copiar os arquivos do projeto nativewind-login/
# (sobrescrever os existentes)

# Rodar
npx expo start -c
```

**Sintaxe:**
```tsx
<View className="flex-1 bg-slate-900 px-6">
  <Text className="text-white text-2xl font-bold">Hello</Text>
</View>
```

---

## 2️⃣ Tamagui

```bash
# Criar projeto
npx create-expo-app@latest tamagui-login --template blank-typescript
cd tamagui-login

# Instalar dependências
npm install tamagui @tamagui/config @tamagui/font-inter @tamagui/babel-plugin
npm install react-native-reanimated react-native-safe-area-context @expo/vector-icons expo-font

# Copiar os arquivos do projeto tamagui-login/

# Rodar
npx expo start -c
```

**Sintaxe:**
```tsx
<YStack flex={1} backgroundColor="$background" padding="$6">
  <Text color="$color" fontSize="$8" fontWeight="bold">Hello</Text>
</YStack>
```

---

## 3️⃣ Styled Components

```bash
# Criar projeto
npx create-expo-app@latest styled-login --template blank-typescript
cd styled-login

# Instalar dependências
npm install styled-components react-native-safe-area-context @expo/vector-icons
npm install @types/styled-components-react-native --save-dev

# Copiar os arquivos do projeto styled-login/

# Rodar
npx expo start -c
```

**Sintaxe:**
```tsx
const Container = styled.View`
  flex: 1;
  background-color: #0f172a;
  padding: 24px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
```

---

## 4️⃣ Gluestack UI (NativeWind-based)

```bash
# Criar projeto
npx create-expo-app@latest gluestack-login --template blank-typescript
cd gluestack-login

# Instalar dependências
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context @expo/vector-icons

# Criar tailwind.config.js
npx tailwindcss init

# Copiar os arquivos do projeto gluestack-login/

# Rodar
npx expo start -c
```

**Sintaxe:**
```tsx
<Box className="flex-1 bg-slate-900 px-6">
  <Heading size="lg">Hello</Heading>
  <Button variant="solid" size="lg">Click me</Button>
</Box>
```

---

## 📱 Testando no Celular

1. Instale o app **Expo Go** no seu celular
2. Execute `npx expo start` no projeto
3. Escaneie o QR code com o app Expo Go

## 🖥️ Testando no Emulador

### iOS (Mac apenas)
```bash
npx expo start --ios
```

### Android
```bash
npx expo start --android
```

### Web
```bash
npx expo start --web
```

---

## 📊 Comparativo

| Framework | Performance | DX | Curva | Melhor para |
|-----------|-------------|-----|-------|-------------|
| **NativeWind** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Baixa | Devs Tailwind |
| **Tamagui** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Média | Design Systems |
| **Styled Comp.** | ⭐⭐⭐ | ⭐⭐⭐⭐ | Baixa | Projetos legados |
| **Gluestack** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Média | Apps acessíveis |

---

## 🎨 Ícones

Todos os projetos usam **@expo/vector-icons** que inclui:
- Ionicons
- MaterialIcons
- FontAwesome
- Feather
- E muitos outros...

Veja a lista completa em: https://icons.expo.fyi/

---

## 🔧 Troubleshooting

### Cache Issues
```bash
npx expo start -c
```

### Metro bundler issues
```bash
npx expo start --clear
```

### Dependências não encontradas
```bash
rm -rf node_modules
npm install
```

---

## 📚 Documentação

- [NativeWind](https://nativewind.dev)
- [Tamagui](https://tamagui.dev)
- [Styled Components](https://styled-components.com)
- [Gluestack UI](https://gluestack.io)
- [Expo](https://docs.expo.dev)
