import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [isClient, setIsClient] = useState(true);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [funcao, setFuncao] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleToggleSwitch = () => {
    setIsClient((prev) => {
      if (!prev) {
        setFuncao("");
      }
      return !prev;
    });
  };

  const handleSalvar = () => {
    if (!nomeCompleto || !telefone || !email || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    if (!isClient && !funcao) {
      alert("Por favor, preencha o campo Função para o perfil Profissional.");
      return;
    }

    const userData = {
      type: isClient ? "Cliente" : "Profissional",
      nomeCompleto,
      telefone,
      email,
      senha,
    };

    if (!isClient) {
      userData.funcao = funcao;
    }

    console.log("Dados do usuário:", userData);
    alert(
      `Cadastro de ${userData.type} salvo!\nVerifique o console para os dados.`
    );
  };

  const handleCancelar = () => {
    setNomeCompleto("");
    setTelefone("");
    setEmail("");
    setFuncao("");
    setSenha("");
    setConfirmarSenha("");
    alert("Cadastro cancelado e campos limpos.");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* Top Bar (com o switch) */}
          <View style={styles.topBar}>
            <View style={styles.switchContainer}>
              <Text style={[styles.label, isClient && styles.activeLabel]}>
                Cliente
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#555" }}
                thumbColor={isClient ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleToggleSwitch}
                value={!isClient}
              />
              <Text style={[styles.label, !isClient && styles.activeLabel]}>
                Profissional
              </Text>
            </View>
          </View>

          {/* Campos do Formulário */}
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Nome completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              placeholderTextColor="#999"
              value={nomeCompleto}
              onChangeText={setNomeCompleto}
            />

            <Text style={styles.inputLabel}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu telefone"
              placeholderTextColor="#999"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
            />

            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Campo "Função" aparece apenas para Profissional */}
            {!isClient && (
              <>
                <Text style={styles.inputLabel}>Função</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua função"
                  placeholderTextColor="#999"
                  value={funcao}
                  onChangeText={setFuncao}
                />
              </>
            )}

            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <Text style={styles.inputLabel}>Confirmar a senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha novamente"
              placeholderTextColor="#999"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
          </View>

          {/* Botões de Ação */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancelar}
            >
              <Text style={styles.cancelButtonText}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
              <Text style={styles.saveButtonText}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Fundo branco
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  topBar: {
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingVertical: 5,
  },
  label: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#666",
    fontWeight: "normal",
  },
  activeLabel: {
    color: "#000",
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
