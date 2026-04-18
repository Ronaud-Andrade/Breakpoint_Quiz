import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function HomeScreen(){

  const router = useRouter();

  return(
    <View style={styles.conteiner}>
      <LinearGradient
        colors={['#00AEFF', '#00FF4D']}
        style={styles.conteiner}
      >
        <View 
        style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:50}}
        >
          <Image source={require("../../src/Images/logo-breakpoint.png")} />

          <Text style={{fontSize: 20, color:'white', fontWeight: 'bold'}}>Home Screen</Text>
        </View>

        <Text style={{fontSize: 25, color:'white', fontWeight: 'bold'}}>Bem-Vindos ao nosso Quiz</Text>

        <Text style={{fontSize: 19, color:'white', fontWeight: 'bold', width: '80%', textAlign:'center'}}>
          Prepare-se para testar os seus conhecimentos em uma série de perguntas sobre Tecnologias.
        </Text>

        <Image
          source={require('../../src/Images/trophy.png')}
          style={{}}
        />

        <Pressable 
          style={styles.playButton}
          onPress={() => router.navigate('/questions') } 
        >
          <Ionicons name="play" size={24} color="black" />
          <Text style={{fontSize:20, color:'white', marginLeft: 10}}>Play</Text>
        </Pressable>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-between',
    width: '100%',
  },
  playButton:{
    backgroundColor: "#08F",
    width: "80%",
    marginBottom: 40,
    alignItems:"center",
    justifyContent: 'center',
    padding:20,
    borderRadius: 15,
    flexDirection: 'row',
  }
})