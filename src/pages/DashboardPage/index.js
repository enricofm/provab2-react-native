import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';

export default function DashboardPage() { 
    return(
        <SafeAreaView>
            <View style={styles.dashboardView}>
                <Text style={styles.text}>Dados do usuário:</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dashboardView: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    }
})