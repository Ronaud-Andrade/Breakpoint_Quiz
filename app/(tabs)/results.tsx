import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from 'react-native-chart-kit';

export default function ResultsScreen({ navigation }: any) {
  const { width, height } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;

  const total = 10;
  const correct = 8;
  const wrong = total - correct;

  const chartSize = Math.min(width * 0.6, height * 0.35);

  const data = [
    { name: 'Erros', population: wrong, color: '#FF0000' },
    { name: 'Acertos', population: correct, color: '#00FF00' },
  ];

  return (
    <LinearGradient colors={['#00B7FF', '#00FF84']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          
          <Text style={[styles.title, { fontSize: isDesktop ? 46 : 32 }]}>
            PARABÉNS!
          </Text>

          <View style={styles.chartContainer}>
            <PieChart
              data={data}
              width={chartSize}
              height={chartSize}
              chartConfig={{ color: () => '#000' }}
              accessor={'population'}
              backgroundColor={'transparent'}
              // AUMENTADO PARA 50 para mover mais para a direita
              paddingLeft={'55.5'} 
              hasLegend={false}
              absolute
              style={{
                alignSelf: 'center',
              }}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>VOCÊ ACERTOU</Text>
            <Text style={styles.score}>{correct} DE {total}</Text>
            <Text style={styles.points}>SUA PONTUAÇÃO: 800 PTS</Text>
          </View>

          <View style={[styles.buttonsContainer, { width: isDesktop ? 400 : '90%' }]}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Questions')}>
              <Text style={styles.buttonText}>Refazer Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Voltar ao Início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  title: {
    color: '#000',
    fontWeight: '900',
    textAlign: 'center',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  infoContainer: {
    alignItems: 'center',
  },
  label: { fontSize: 20, fontWeight: '700', color: '#000' },
  score: { fontSize: 28, fontWeight: '900', color: '#000' },
  points: { fontSize: 18, fontWeight: '700', color: '#000' },
  buttonsContainer: {
    gap: 10,
  },
  button: {
    backgroundColor: '#008CFF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});