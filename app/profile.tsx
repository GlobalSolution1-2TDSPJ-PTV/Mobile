import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil e Configurações</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sair"
          color="#1E90FF"
          onPress={() => router.push('/welcome')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // azul bem claro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#1E90FF', // azul forte
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});
