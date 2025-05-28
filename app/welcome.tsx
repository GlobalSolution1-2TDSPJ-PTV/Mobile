import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao FloodWatch</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          color="#1E90FF"
          onPress={() => router.push('/')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continuar como visitante"
          color="#4682B4"
          onPress={() => router.push('/')}
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
    marginBottom: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
