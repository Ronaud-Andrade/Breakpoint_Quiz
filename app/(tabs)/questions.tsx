import { View, Text, StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function QuestionsScreen(){
  return(
    <View style={styles.conteiner}>
        <LinearGradient
        style={styles.conteiner}
        colors={['#00AEFF', '#00FF4D']}
        >
            <View>
                <Text style={{fontSize: 20, color:'white', fontWeight: 'bold'}}>Questions Screen</Text>
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
  },
});