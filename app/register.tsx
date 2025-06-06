import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function RegisterScreen() {
  const { register } = useAuth();
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [userType, setUserType] = useState('COMUM');
  const [telefone, setTelefone] = useState('');


  const handleRegister = async () => {
  if (senha !== confirmarSenha) {
    Alert.alert('Erro', 'As senhas não coincidem');
    return;
  }

  if (!email || !senha || !nome || !telefone) {
    Alert.alert('Erro', 'Por favor, preencha todos os campos');
    return;
  }

  const tipoUsuario = userType.trim().toUpperCase();
  if (!['COMUM', 'DEFESA_CIVIL', 'ONG'].includes(tipoUsuario)) {
    Alert.alert('Erro', 'Tipo de usuário inválido. Use COMUM, DEFESA_CIVIL ou ONG');
    return;
  }

  try {
    await register(email, senha, nome, telefone, tipoUsuario);
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    router.push('/home');
  } catch (error) {
    console.error(error);
    Alert.alert('Erro', 'Erro ao cadastrar usuário');
  }
};

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        placeholder="Confirmar Senha"
        style={styles.input}
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TextInput
        placeholder="Telefone"
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        placeholder="Tipo de Usuário (COMUM, DEFESA_CIVIL, ONG)"
        style={styles.input}
        value={userType}
        onChangeText={setUserType}
      />


      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" color="#32CD32" onPress={handleRegister} />
      </View>

      <TouchableOpacity onPress={goToLogin} style={styles.registerLink}>
        <Text style={styles.registerText}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 40, fontWeight: 'bold' },
  input: { width: '80%', height: 40, borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingHorizontal: 10 },
  buttonContainer: { width: '80%', marginBottom: 20 },
  registerLink: { marginTop: 10 },
  registerText: { color: '#1E90FF', textDecorationLine: 'underline' },
});
