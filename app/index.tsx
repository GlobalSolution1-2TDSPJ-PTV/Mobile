import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard - Status da Cidade</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Alertas"
          color="#1E90FF"
          onPress={() => router.push('/alerts')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Mapa"
          color="#4682B4"
          onPress={() => router.push('/map')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Preciso de ajuda (SOS)"
          color="#FF4500"  
          onPress={() => router.push('/sos')}
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
    backgroundColor: '#F0F8FF', 
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#1E90FF', 
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
