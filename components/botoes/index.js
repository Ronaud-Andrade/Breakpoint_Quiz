import {View, Pressable, TouchableOpacity, StyleSheet, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { ResultsScreen } from '@/app/(tabs)/results';

export function Askbuttons(){

    const router = useRouter();

    return(

    <View style={sytles.conteiner}>
        <TouchableOpacity style={sytles.buttons}>
            <Text style={sytles.textButtons}>A)</Text>
            <Text style={sytles.textButtons}>Questão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sytles.buttons}>
            <Text style={sytles.textButtons}>B)</Text>
            <Text style={sytles.textButtons}>Questão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sytles.buttons}>
            <Text style={sytles.textButtons}>C)</Text>
            <Text style={sytles.textButtons}>Questão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sytles.buttons}>
            <Text style={sytles.textButtons}>D)</Text>
            <Text style={sytles.textButtons}>Questão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sytles.playButton} onPress={() => router.navigate('/(tabs)/results')}>
            <Ionicons name="play" size={24} color="white" />
            <Text style={sytles.textPlay}>Proxima Questão</Text>
        </TouchableOpacity>
    </View>

    )
}


const sytles = StyleSheet.create({

    conteiner:{
        justifyContent: 'center',
        width: '90%',
    },
    buttons:{
        marginVertical: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 8,

    },
    textButtons:{
        paddingVertical: 20,
        paddingHorizontal: 5,
        fontWeight: 'bold',
    },
    playButton:{
        marginVertical: 20,
        backgroundColor: '#08F',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textPlay:{
        paddingVertical: 15,
        paddingHorizontal: 5,
        color: 'white',
    }






    // conteiner:{
    //     justifyContent: 'space-between',
    //     width: '100%',
    //     height: '30%',
    // },
    // buttons:{
    //     backgroundColor: 'white',
    //     // paddingHorizontal: 130,
    //     paddingVertical: 25,
    //     margin: 10,
    //     borderRadius: 10,
    // },
    // textButtons:{
        
    // },
    // playButton:{
    //     backgroundColor: '#08F',
    //     paddingHorizontal: 100,
    //     paddingVertical: 20,
    //     margin: 20,
    //     borderRadius: 10,
    // },
    // playText:{
    //     alignContent: 'center',
    //     justifyContent: 'center',
          
    // }

});