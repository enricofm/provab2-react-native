import { SafeAreaView, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Link } from '@react-navigation/native';

export default function LoginPage() {
    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Usuário" style={styles.input}/>
                <TextInput placeholder="Senha" secureTextEntry="true" style={styles.input}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <View>
                <Link style={styles.buttonText} to={{ screen: "rpgPage" }} >Entrar</Link>
                </View>
            </TouchableOpacity>
            <Link style={styles.link} to={{ screen: "registerPage" }} >Criar uma conta</Link>
            <Link style={styles.link} to={{ screen: "forgotPassPage" }} >Esqueceu a senha?</Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewInputs: {
        width: '70%',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        color: '#000',
        padding: 10,
        marginTop: 15,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
        fontSize: 17,
    },
    title: {
        marginBottom: 25,
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
    },
    button: {
        marginTop: 35,
        borderRadius: 10,
        backgroundColor: '#ff8000',
        paddingVertical: 10,
        paddingHorizontal: 35,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        color: '#000',
        textDecorationLine: 'underline',
    }
  })
  