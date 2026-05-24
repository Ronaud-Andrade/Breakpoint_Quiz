import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  View,
  Text,
  useWindowDimensions,
  Platform,
} from 'react-native';

import HomeScreen from './HomeScreen';
import QuestionsScreen from './questions';
import ResultsScreen from './results';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileScreen() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: width > 900 ? 32 : 24,
          fontWeight: 'bold',
        }}
      >
        Tela de Perfil
      </Text>
    </View>
  );
}

function QuizStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="Questions"
        component={QuestionsScreen}
      />

      <Stack.Screen
        name="Results"
        component={ResultsScreen}
      />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;
  const isMobile = width < 768;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#00AEFF',
        tabBarInactiveTintColor: '#777',

        tabBarStyle: {
          height: isMobile ? 78 : 88,
          paddingBottom: isMobile ? 8 : 10,
          paddingTop: 8,
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarLabelStyle: {
          fontSize: isMobile ? 11 : 13,
          fontWeight: 'bold',
          marginBottom: Platform.OS === 'web' ? 4 : 0,
        },

        tabBarIconStyle: {
          marginTop: 2,
        },

        tabBarIcon: ({ color }) => {
          let iconName:
            | 'play-circle-outline'
            | 'person-outline' =
            'play-circle-outline';

          if (route.name === 'QuizTab') {
            iconName = 'play-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={
                isDesktop
                  ? 30
                  : isTablet
                  ? 28
                  : 24
              }
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="QuizTab"
        component={QuizStackNavigator}
        options={{
          tabBarLabel: 'Jogar',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}