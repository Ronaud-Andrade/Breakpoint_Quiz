import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Askbuttons } from '../../components/botoes';

export default function QuestionsScreen() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;

  return (
    <LinearGradient
      style={styles.container}
      colors={['#00AEFF', '#00FF4D']}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.questionNumber,
            {
              fontSize: isDesktop
                ? 28
                : isTablet
                ? 24
                : width * 0.05,
            },
          ]}
        >
          Pergunta 1 de 1
        </Text>

        <Text
          style={[
            styles.question,
            {
              width: isDesktop ? '65%' : '90%',
              fontSize: isDesktop
                ? 32
                : isTablet
                ? 26
                : width * 0.06,
            },
          ]}
        >
          Qual linguagem é usada para estilizar páginas web?
        </Text>

        <View
          style={[
            styles.buttonsContainer,
            {
              width: isDesktop
                ? '40%'
                : isTablet
                ? '60%'
                : '95%',
            },
          ]}
        >
          <Askbuttons />
        </View>
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
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 95,
  },

  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  questionNumber: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  question: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 45,
    marginTop: 20, // <--- Adicionado para criar espaço entre o número e a pergunta
  },
});