import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppointmentConfirmScreen({ route, navigation }) {
  const { profissional, servico, data, hora } = route.params;

  const handleFinalize = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação do Agendamento</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Profissional:</Text>
        <Text style={styles.infoText}>{profissional.nome}</Text>

        <Text style={styles.label}>Serviço:</Text>
        <Text style={styles.infoText}>{servico}</Text>

        <Text style={styles.label}>Data:</Text>
        <Text style={styles.infoText}>{data}</Text>

        <Text style={styles.label}>Hora:</Text>
        <Text style={styles.infoText}>{hora}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFinalize}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 40,
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoText: {
    fontSize: 18,
    color: "#333",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#53a5a3",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
