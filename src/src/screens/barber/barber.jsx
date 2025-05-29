import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";

export default function BarberScreen({ route, navigation }) {
  const { item, tipo } = route.params;

  const handleAppointmentPress = () => {
    navigation.navigate("Appointment", { profissional: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={item.foto} style={styles.profileImage} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.description}>{item.descricao}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAppointmentPress}>
        <Text style={styles.buttonText}>
          Marcar {tipo === "Barbeiro" ? "Horário" : "Serviço"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
