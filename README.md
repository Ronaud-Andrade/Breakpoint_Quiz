# Breakpoint Quiz

Aplicativo móvel criado com Expo e React Native para um quiz de tecnologia.

## Visão geral

O projeto contém uma interface simples com três telas principais:
- Home: tela de boas-vindas com um botão para iniciar o quiz.
- Perguntas: exibe a pergunta atual e opções de resposta.
- Resultados: mostra o desempenho do usuário com pontuação e progresso.

O app usa `expo-router` para navegação e componentes Expo para gradientes, ícones e animações.

## Tecnologias

- Expo
- React Native
- TypeScript
- Expo Router
- React Navigation
- Expo Linear Gradient
- React Native Circular Progress
- Expo Haptics

## Estrutura do projeto

- `app/`: rotas e telas do aplicativo
  - `(tabs)/index.tsx`: tela inicial
  - `(tabs)/questions.tsx`: tela de perguntas
  - `(tabs)/results.tsx`: tela de resultados
- `components/`: componentes reutilizáveis e botões
- `src/Images/`: imagens usadas no app
- `assets/images/`: ícones e imagens de splash
- `scripts/`: scripts auxiliares, como `reset-project.js`

## Instalação

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto com Expo:

```bash
npm start
```

3. Abra no emulador ou dispositivo:

```bash
npm run android
```

ou

```bash
npm run ios
```

ou

```bash
npm run web
```

## Scripts úteis

- `npm start`: inicia o servidor Expo
- `npm run android`: inicia no Android
- `npm run ios`: inicia no iOS
- `npm run web`: executa a versão web
- `npm run lint`: executa o ESLint
- `npm run reset-project`: limpa ou reinicia configurações do projeto (definido em `scripts/reset-project.js`)

## Configuração Expo

O projeto está configurado em `app.json` com:
- `slug`: `Breakpoint_Quiz`
- `orientation`: `portrait`
- `scheme`: `breakpointquiz`
- suporte para iOS, Android e Web
- splash screen personalizada e ícones adaptativos

## Observações

A tela de perguntas ainda parece ter lógica de fluxo de quiz básica; botões de resposta e estados de progresso podem ser expandidos para uma experiência completa.

---

Desenvolvido para ser um quiz interativo de tecnologia com navegação simples, visual moderno e suporte cross-platform via Expo.