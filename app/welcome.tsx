import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao FloodWatch</Text>
      <Button title="Entrar" onPress={() => router.push('/')} />
      <Button title="Continuar como visitante" onPress={() => router.push('/')} />
    </View>
  );
}
