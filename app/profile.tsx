import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import getApiUrl from '../utils/api';
import axios from 'axios';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogout = () => {
    logout();
    router.push('/welcome');
  };

  const handleChangePassword = async () => {
  if (!user) return;

  if (newPassword !== confirmPassword) {
    Alert.alert('Erro', 'As novas senhas não coincidem.');
    return;
  }

  try {
    await axios.patch(
      `${getApiUrl()}/api/usuarios/senha`,
      {
        novaSenha: newPassword
      }
    );

    Alert.alert('Sucesso', 'Senha atualizada! Faça login novamente.');
    logout();
    router.replace('/login');
  } catch (error) {
    console.error(error);
    Alert.alert('Erro', 'Não foi possível atualizar a senha.');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil e Configurações</Text>

      {!user ? (
        <Text style={styles.visitorText}>Você está como visitante</Text>
      ) : (
        <>
          <Text style={styles.userInfo}>Email: {user.email}</Text>

          <Text style={styles.subtitle}>Atualizar Senha</Text>
          <TextInput
            placeholder="Senha atual"
            style={styles.input}
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <TextInput
            placeholder="Nova senha"
            style={styles.input}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            placeholder="Confirmar nova senha"
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <View style={styles.buttonContainer}>
            <Button title="Atualizar Senha" color="#FFA500" onPress={handleChangePassword} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Sair" color="#1E90FF" onPress={handleLogout} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F0F8FF' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  visitorText: { fontSize: 18, color: '#888' },
  userInfo: { fontSize: 18, marginBottom: 20 },
  subtitle: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
  input: { width: '80%', height: 40, borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingHorizontal: 10 },
  buttonContainer: { width: '80%', marginVertical: 10 },
});
