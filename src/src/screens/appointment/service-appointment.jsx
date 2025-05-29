import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

export default function ServiceAppointmentScreen({ route, navigation }) {
  const { profissional, servico } = route.params;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (text) => {
    const formattedText = text
      .replace(/[^0-9-]/g, "")
      .replace(/^(\d{4})(\d)/g, "$1-$2")
      .replace(/^(\d{4}-\d{2})(\d)/g, "$1-$2")
      .substring(0, 10);
    setDate(formattedText);
  };

  const handleTimeChange = (text) => {
    const formattedText = text
      .replace(/[^0-9:]/g, "")
      .replace(/^(\d{2})(\d)/g, "$1:$2")
      .substring(0, 5);
    setTime(formattedText);
  };

  const validateDateTime = () => {
    if (!date || !time) {
      Alert.alert("Erro", "Por favor, preencha data e hora.");
      return false;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      Alert.alert("Erro", "Formato de data inválido. Use YYYY-MM-DD.");
      return false;
    }

    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(time)) {
      Alert.alert("Erro", "Formato de hora inválido. Use HH:MM (24h).");
      return false;
    }

    const selectedDateTime = new Date(`${date}T${time}:00`);
    const now = new Date();

    if (selectedDateTime <= now) {
      Alert.alert("Erro", "Por favor, selecione uma data e hora futuras.");
      return false;
    }

    return true;
  };

  const handleSchedule = () => {
    if (!validateDateTime()) return;

    navigation.navigate("ConfirmAppointment", {
      profissional,
      servico,
      data: date,
      hora: time,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Serviço</Text>

      <Text style={styles.label}>Profissional:</Text>
      <Text style={styles.infoText}>{profissional.nome}</Text>

      <Text style={styles.label}>Serviço:</Text>
      <Text style={styles.infoText}>{servico}</Text>

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10}
      />

      <Text style={styles.label}>Hora:</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM (24h)"
        value={time}
        onChangeText={handleTimeChange}
        keyboardType="numeric"
        maxLength={5}
      />

      <TouchableOpacity style={styles.button} onPress={handleSchedule}>
        <Text style={styles.buttonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#53a5a3",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
