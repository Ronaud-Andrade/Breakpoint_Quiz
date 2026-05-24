import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({ navigation }: any) {
  const { width, height } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;

  return (
    <LinearGradient
      colors={['#00AEFF', '#00FF4D']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../../src/Images/logo-breakpoint.png')}
            style={{
              width: isDesktop
                ? 100
                : isTablet
                ? 85
                : width * 0.2,

              height: isDesktop
                ? 100
                : isTablet
                ? 85
                : width * 0.2,

              resizeMode: 'contain',
            }}
          />

          <Text
            style={[
              styles.title,
              {
                fontSize: isDesktop
                  ? 38
                  : isTablet
                  ? 32
                  : width * 0.065,
              },
            ]}
          >
            Home Screen
          </Text>
        </View>

        <Text
          style={[
            styles.subtitle,
            {
              fontSize: isDesktop
                ? 32
                : isTablet
                ? 26
                : width * 0.06,
            },
          ]}
        >
          Bem-Vindos ao nosso Quiz
        </Text>

        <Text
          style={[
            styles.description,
            {
              width: isDesktop ? '50%' : '90%',
              fontSize: isDesktop
                ? 20
                : isTablet
                ? 18
                : width * 0.043,
            },
          ]}
        >
          Prepare-se para testar os seus conhecimentos
          em perguntas sobre tecnologia.
        </Text>

        <Image
          source={require('../../src/Images/trophy.png')}
          style={{
            width: isDesktop
              ? 300
              : isTablet
              ? 250
              : width * 0.55,

            height: isDesktop
              ? 300
              : isTablet
              ? 250
              : width * 0.55,

            resizeMode: 'contain',
          }}
        />

        <Pressable
          style={[
            styles.playButton,
            {
              width: isDesktop
                ? 350
                : isTablet
                ? 300
                : '85%',
            },
          ]}
          onPress={() => navigation.navigate('Questions')}
        >
          <Ionicons
            name="play"
            size={26}
            color="white"
          />

          <Text style={styles.playText}>
            Play
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 26,
  },

  playButton: {
    backgroundColor: '#008CFF',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  playText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});