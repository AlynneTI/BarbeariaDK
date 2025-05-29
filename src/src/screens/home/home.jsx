import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Barbers } from "../../constants/Barbers";
import { Client } from "../../constants/Client";

export default function HomeScreen({ navigation }) {
  const usuarioNome = "Fulano";

  const localizacaoMapa = {
    latitude: -19.85926270466907,
    longitude: -43.9186609850829,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const selecionarProfissional = (profissional) => {
    navigation.navigate("Appointment", { profissional });
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => selecionarProfissional(item)}
    >
      <Image source={item.foto} style={styles.foto} />
      <Text style={styles.nome}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => goToProfile()}>
        <Image
          source={{ uri: Client.pfp }}
          style={styles.circulo}
          onPress={() => goToProfile()}
        />
        <Text style={styles.bemVindo}>Bem-vindo, {Client.name}</Text>
      </TouchableOpacity>

      <View style={styles.titleRow}>
        <Text style={styles.titulo}>Escolha o profissional</Text>
      </View>

      <FlatList
        data={Barbers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 15, paddingRight: 15 }}
        style={{ maxHeight: 200 }}
      />

      <View style={styles.titleRow}>
        <Text style={styles.titulo}>Nossa localização</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 80,
  },
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 15,
  },
  bemVindo: {
    fontSize: 18,
    fontWeight: "600",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },
  card: {
    width: 180,
    height: 180,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
  },
});
