import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'; // Import simples para a tela de Perfil temporária

// Importação das suas telas
import HomeScreen from './HomeScreen';
import QuestionsScreen from './questions';
import ResultsScreen from './results';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tela de Perfil temporária apenas para a segunda aba não quebrar
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Perfil</Text>
    </View>
  );
}

// 1. Definição da Stack (Fluxo do Quiz)
function QuizStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#00AEFF' }, // Ajustado para a cor do seu app
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início', headerShown: false }} // Esconde o topo na Home se quiser focar no seu gradiente
      />
      <Stack.Screen
        name="Questions"
        component={QuestionsScreen}
        options={{ title: 'Perguntas', headerLeft: () => null }} // Correção para esconder a seta de voltar
      />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{ title: 'Resultado', headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
}

// 2. Navegação Principal (Tabs) - Este é o componente que exportamos como Raiz
export default function AppRoutes() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#00AEFF',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ color, size }) => {
              let iconName: "play-circle-outline" | "person-outline" = 'play-circle-outline';

              if (route.name === 'QuizTab') {
                iconName = 'play-circle-outline';
              } else if (route.name === 'Profile') {
                iconName = 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          {/* Sua Stack do Quiz */}
          <Tab.Screen
            name='QuizTab'
            component={QuizStackNavigator}
            options={{ tabBarLabel: 'Jogar' }}
          />

          {/* Segunda aba */}
          <Tab.Screen
            name='Profile'
            component={ProfileScreen}
            options={{ tabBarLabel: 'Perfil' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}