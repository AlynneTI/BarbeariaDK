import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Barbers } from "../../constants/Barbers";
import { Client } from "../../constants/Client";

export default function PerfilClienteScreen({ navigation }) {
  const agendamentos = [
    {
      id: "1",
      profissional: Barbers[0],
      servico: { nome: "Corte Masculino", preco: 30 },
      data: "2025-05-25",
      hora: "10:00",
    },
    {
      id: "2",
      profissional: Barbers[1],
      servico: { nome: "Escova", preco: 50 },
      data: "2025-06-01",
      hora: "15:00",
    },
  ];

  const remarcar = (item) => {
    navigation.navigate("Appointment", {
      profissional: item.profissional,
      servico: item.servico,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: Client.pfp }} style={styles.profileImage} />
        <Text style={styles.nome}>Bem-vindo, {Client.name}</Text>
      </View>
      <Text style={styles.sectionTitle}>Seus Agendamentos:</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.agendamentoBox}>
            <Text style={styles.label}>Profissional:</Text>
            <Text style={styles.info}>{item.profissional.nome}</Text>

            <Text style={styles.label}>Serviço:</Text>
            <Text style={styles.info}>
              {item.servico.nome} - R$ {item.servico.preco}
            </Text>

            <Text style={styles.label}>Data:</Text>
            <Text style={styles.info}>{item.data}</Text>

            <Text style={styles.label}>Hora:</Text>
            <Text style={styles.info}>{item.hora}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => remarcar(item)}
            >
              <Text style={styles.buttonText}>Remarcar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  nome: { fontSize: 18, textAlign: "center", marginBottom: 30 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  agendamentoBox: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  info: { fontSize: 16, marginBottom: 5 },
  button: {
    backgroundColor: "#53a5a3",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
