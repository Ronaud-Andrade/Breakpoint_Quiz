import { View, Text, StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Askbuttons } from '../../components/botoes/index';


export default function QuestionsScreen({ navigation }: any){
  return(
    <View style={{flex:1}}>
        <LinearGradient
        style={styles.conteiner}
        colors={['#00AEFF', '#00FF4D']}
        >
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color:'white', fontWeight: 'bold', marginTop: 60}}>Perguntas 1 de 1</Text> {/* Usar useState para o número de perguntas */}
                
                <Text style={{fontSize: 19, color:'white', fontWeight: 'bold', padding: 30, textAlign:'center'}}>
                  Qual linguagem é usada para estilizar páginas web?
                </Text>

                {/* Criar componentes para os botões de respostas */}

               <Askbuttons/> 
            </View>




        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});