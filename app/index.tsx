import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard - Status da Cidade</Text>
      <Button title="Ver Alertas" onPress={() => router.push('/alerts')} />
      <Button title="Mapa" onPress={() => router.push('/map')} />
      <Button title="Preciso de ajuda (SOS)" onPress={() => router.push('/sos')} />
    </View>
  );
}
