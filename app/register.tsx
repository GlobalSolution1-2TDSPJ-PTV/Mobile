import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen() {
  const { register } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRegister = () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }
    register(email, senha);
    Alert.alert('Sucesso', 'Cadastro realizado!');
    router.push('/login');
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

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
