import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export function Askbuttons() {
  const navigation = useNavigation();

  return (
    <View style={styles.conteiner}>
      {/* Botões de Questão */}
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>A) </Text>
        <Text style={styles.textAnswer}>Java</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>B) </Text>
        <Text style={styles.textAnswer}>CSS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>C) </Text>
        <Text style={styles.textAnswer}>HTML</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>D) </Text>
        <Text style={styles.textAnswer}>Python</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Results')}>
        <Ionicons name="play" size={24} color="white" />
        <Text style={styles.textPlay}>Proxima Questão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    justifyContent: 'center',
    width: '90%',
  },
  buttons: {
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center', // Alinha verticalmente
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  textButtons: {
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  textAnswer: {
    flex: 1, // Faz o texto ocupar todo o espaço restante
    textAlign: 'center', // Centraliza a palavra
    fontWeight: 'bold',
    marginRight: 25, // Ajuste para compensar o tamanho do marcador "A)"
  },
  playButton: {
    marginVertical: 20,
    backgroundColor: '#08F',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textPlay: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});