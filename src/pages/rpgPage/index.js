import { Button, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from '@react-navigation/native';

const listaItens = [
  {
    nome: "Adaga",
    poder: "Dano de Ataque: 35",
    peso: "Leve",
    urlItem: "https://lojauf.weebly.com/uploads/3/7/0/1/37012679/9425916.png?325"
  },
  {
    nome: "Espada",
    poder: "Dano de Ataque: 62",
    peso: "Médio",
    urlItem: "https://i.pinimg.com/originals/9b/b1/e6/9bb1e69c0169d1fb5899bdc20b8a0d77.png"
  },
  {
    nome: "Armadura de Bronze",
    poder: "Poder de Defesa: 120",
    peso: "Pesado",
    urlItem: "https://i.pinimg.com/originals/25/8b/e9/258be92633fe1c61a08b85b1ae2b1f01.png"
  }
]

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.viewDashButton}>
        <TouchableOpacity style={styles.dashButton}>
          <View>
            <Link style={styles.buttonText} to={{ screen: "dashboardPage" }} >Dashboard</Link>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewCards}>
        {listaItens.map(item => <Item item={item}/>)}
      </View>
    </SafeAreaView>
  );
}

function Item(props)
{
  return (
    <View style={styles.cartao}>
      <View style={styles.viewImage}>
        <Image style={styles.imagem} source={{uri: props.item.urlItem}}/>
      </View>
      <View style={styles.viewDados}>
        <Text style={styles.nomeItem}>{props.item.nome}</Text>
        <Text style={styles.dados}>{props.item.poder}</Text>
        <Text style={styles.dados}>Peso: {props.item.peso}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TROCAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewDashButton: {
    justifyContent: 'flex-start',
  },
  viewCards: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartao: {
    width: "90%",
    backgroundColor: '#f7f7f7',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
  },
  viewImage: {
    padding: 20,
    height: "100%",
    width: "30%",
  },
  imagem: {
    width: 90,
    height: 100,
  },
  viewDados: {
    width: '70%',
    padding: 20,
    flexDirection: 'column',
  },
  nomeItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#ff8000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  dashButton: {
    width: '30%',
    marginStart: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#ff8000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
  }
});