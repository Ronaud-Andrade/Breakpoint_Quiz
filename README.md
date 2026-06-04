# Breakpoint Quiz

Aplicativo mobile em React Native + Expo para um quiz de tecnologia com navegação por abas e telas de início, perguntas e resultado.

## Visão geral

O projeto atual possui:
- tela inicial com botão para iniciar o quiz;
- tela de perguntas com opções de resposta;
- tela de resultados com gráfico de acertos/erros;
- uma aba extra de Perfil (placeholder no momento).

A navegação é feita com Expo Router e React Navigation, com interface visual em gradiente e ícones Expo.

## Tecnologias utilizadas

- Expo SDK 54
- React Native 0.81.5
- TypeScript
- Expo Router
- React Navigation
- Expo Linear Gradient
- Expo Haptics
- react-native-chart-kit
- React Native SVG

## Estrutura do projeto

- `app/`: rotas da aplicação e telas principais
  - `(tabs)/index.tsx`: configuração das rotas e navegação por abas
  - `(tabs)/HomeScreen.tsx`: tela inicial do quiz
  - `(tabs)/questions.tsx`: tela de perguntas
  - `(tabs)/results.tsx`: tela de resultado com gráfico
- `components/`: componentes reutilizáveis, como `botoes/`
- `src/Images/`: imagens usadas nas telas
- `assets/images/`: ícones, splash e recursos visuais
- `scripts/`: utilitários auxiliares

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o app com Expo:

```bash
npx expo start
```

3. Abra no emulador, dispositivo físico ou navegador:

```bash
npx expo start --android
npx expo start --ios
npx expo start --web
```

## Scripts disponíveis

- `npx expo start`: inicia o servidor Expo
- `npx expo start --android`: abre o app no Android
- `npx expo start --ios`: abre o app no iOS
- `npx expo start --web`: abre a versão web
- `npx expo lint`: executa o ESLint do Expo
- `npx expo start --reset-cache`: reinicia o cache do Expo

## Observações

Este projeto ainda está em desenvolvimento. A lógica do quiz e o fluxo de pontuação podem ser evoluídos para uma experiência mais completa.

---

Desenvolvido com Expo e React Native para servir como base para um quiz interativo de tecnologia.