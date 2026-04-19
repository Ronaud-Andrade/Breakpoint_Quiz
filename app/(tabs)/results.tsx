import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function ResultsScreen(){
    return (
        <View>
            <LinearGradient
                colors={['#00AEFF', '#00FF4D']}
            >
                <Text>Proxima Tela</Text>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

});