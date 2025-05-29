import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const SERVICES_BY_PROFESSIONAL = {
  1: ["Corte simples - R$30", "Barba - R$15", "Tratamento capilar - R$60"],
  2: ["Penteados - R$15", "Maquiagem - R$50", "Design de sobrancelha - R$15"],
  3: ["Corte infantil - R$20", "Alisamento - R$40", "Coloração - R$50"],
  4: ["Corte feminino - R$50", "Manicure - R$20", "Pedicure - R$30"],
};

export default function BarberAppointmentScreen({ route, navigation }) {
  const { profissional } = route.params;
  const services = SERVICES_BY_PROFESSIONAL[profissional.id] || [];

  const handleSelectService = (service) => {
    navigation.navigate("ServiceAppointment", {
      profissional,
      servico: service,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {profissional.foto ? (
          <Image
            source={profissional.foto}
            style={styles.profileImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.profilePlaceholder} />
        )}
        <Text style={styles.profileName}>{profissional.nome}</Text>
      </View>

      <Text style={styles.sectionTitle}>Serviços de {profissional.nome}</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => handleSelectService(item)}
          >
            <Text style={styles.serviceText}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Sem serviços disponíveis</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    overflow: "hidden",
    marginTop: 60,
  },
  profilePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 26,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },
  serviceItem: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 18,
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});
