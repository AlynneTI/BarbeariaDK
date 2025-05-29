import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Barbers } from "../../constants/Barbers";

export default function SearchScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [historico, setHistorico] = useState([]);

  const chaveAsync = "@historico_buscas";

  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const salvo = await AsyncStorage.getItem(chaveAsync);
        if (salvo) setHistorico(JSON.parse(salvo));
      } catch (error) {
        console.log("Erro ao carregar histórico:", error);
      }
    };
    carregarHistorico();
  }, []);

  const salvarHistorico = async (novoHistorico) => {
    try {
      setHistorico(novoHistorico);
      await AsyncStorage.setItem(chaveAsync, JSON.stringify(novoHistorico));
    } catch (error) {
      console.log("Erro ao salvar histórico:", error);
    }
  };

  const adicionarAoHistorico = (texto) => {
    if (texto.trim() === "") return;
    const novoHistorico = [
      texto,
      ...historico.filter((item) => item !== texto),
    ].slice(0, 5);
    salvarHistorico(novoHistorico);
  };

  const handleBuscar = (texto) => {
    setBusca(texto);
    adicionarAoHistorico(texto);
  };

  const limparHistorico = async () => {
    try {
      setHistorico([]);
      await AsyncStorage.removeItem(chaveAsync);
    } catch (error) {
      console.log("Erro ao limpar histórico:", error);
    }
  };

  const abrirPerfil = (item) => {
    navigation.navigate("Barber", { item });
  };

  const dadosFiltrados = Barbers.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Pesquisar Barbeiros</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar barbeiro..."
        value={busca}
        returnKeyType="search"
        onChangeText={setBusca}
        onSubmitEditing={() => handleBuscar(busca)}
      />

      {busca.length > 0 ? (
        <FlatList
          data={dadosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemLista}
              onPress={() => abrirPerfil(item)}
            >
              <Text style={{ fontSize: 16 }}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={{ marginTop: 20, color: "#888" }}>
              Nenhum barbeiro encontrado.
            </Text>
          }
        />
      ) : historico.length > 0 ? (
        <>
          <View style={styles.historicoHeader}>
            <Text style={styles.subtitulo}>Histórico de buscas</Text>
            <TouchableOpacity onPress={limparHistorico}>
              <Text style={{ color: "red" }}>Limpar</Text>
            </TouchableOpacity>
          </View>
          {historico.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemLista}
              onPress={() => handleBuscar(item)}
            >
              <Text style={{ fontSize: 16 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <Text style={{ color: "#aaa", marginTop: 10 }}>
          Digite para pesquisar barbeiros.
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  historicoHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  itemLista: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
});
