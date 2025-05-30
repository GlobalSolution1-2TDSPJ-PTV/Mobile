import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (login(email, senha)) {
      Alert.alert('Sucesso', 'Login realizado!');
      router.replace('/');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  };

  const goToRegister = () => {
    router.push('/register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <View style={styles.buttonContainer}>
        <Button title="Entrar" color="#32CD32" onPress={handleLogin} />
      </View>

      <TouchableOpacity onPress={goToRegister} style={styles.registerLink}>
        <Text style={styles.registerText}>Não tem conta? Cadastre-se</Text>
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
